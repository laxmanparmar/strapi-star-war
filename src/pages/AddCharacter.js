import Modal from "../components/Modal/Model";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "../components/Buttons/RoundButton";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { addCharacter, fetchCharactersQuery, fetchPlanetsQuery } from "../query";
import Loader from "../components/Loader";
import { isDescription, isRequired, isValidCode, isValidUrlSize } from "../utils/validation";
import SelectElement from "../components/Select";

const CancelBtn = styled(SecondaryButton)`
    margin-right: 2rem
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const AddCharacter = ({
    active,
    setActive,
    options
}) => {
    const [addNewCharacter, { loading, error }] = useMutation(addCharacter(), {
        refetchQueries: [{ query: fetchCharactersQuery() }, { query: fetchPlanetsQuery() }]
    });
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = async (val) => {
        await addNewCharacter({ variables: { characterInfo: val } });
        setActive(false);
    };

    return (
        <>
            {
                loading ? <Loader /> : null
            }
            <Modal
                active={active}
                hideModal={() => setActive(false)}
                title="Character"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label={"Name"}
                        error={errors?.name?.message}
                        inputProps={
                            {
                                ...register("name", { validate: { ...isRequired() } }),
                                maxLength: 20
                            }
                        } />
                    <Input
                        label={"Planet"}
                        error={errors?.planet?.message}
                        inputProps={
                            {
                                placeholder: 'e.g. PI-NOE-01',
                                ...register("planet", { validate: { ...isRequired(), ...isValidCode() } })
                            }
                        } />
                    <Input
                        label={"PictureUrl"}
                        error={errors?.pictureUrl?.message}
                        helperText="Paste the URL of a JPG or PNG of max 20 kb"
                        inputProps={
                            {
                                ...register("pictureUrl", { validate: { ...isRequired(), ...isValidUrlSize() } })
                            }
                        } />
                    <Input
                        label={"Description"}
                        error={errors?.description?.message}
                        inputProps={
                            {
                                ...register("description", { validate: { ...isRequired(), ...isDescription() } }),
                                maxLength: 300
                            }
                        } />
                    <SelectElement
                        label="Friends"
                        name="friends"
                        options={options}
                        control={control} />
                    <div>
                        <label>
                            {error?.message}
                        </label>
                    </div>
                    <BtnContainer>
                        <CancelBtn onClick={() => setActive(false)}>CANCEL</CancelBtn>
                        <PrimaryButton>CREATE CHARACTER</PrimaryButton>
                    </BtnContainer>
                </form>
            </Modal>
        </>
    )
};

export default AddCharacter;
