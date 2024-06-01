import Modal from "../components/Modal/Model";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "../components/Buttons/RoundButton";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { addNewPlanet, fetchPlanetsQuery } from "../query";
import Loader from "../components/Loader";
import { isDescription, isRequired, isValidCode, isValidUrlSize } from "../utils/validation";
const CancelBtn = styled(SecondaryButton)`
    margin-right: 2rem
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const AddPlanet = ({
    active,
    setActive
}) => {
    const [addPlanet, { loading, error }] = useMutation(addNewPlanet(), {
        refetchQueries: [{ query: fetchPlanetsQuery() }]
    });
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (val) => {
        await addPlanet({ variables: { planetInfo: val } });
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
                title="Planet"
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
                        label={"Code"}
                        error={errors?.code?.message}
                        inputProps={
                            {
                                placeholder: 'e.g. PI-NOE-01',
                                ...register("code", { validate: { ...isRequired(), ...isValidCode() } })
                            }
                        } />
                    <Input
                        label={"PictureUrl"}
                        error={errors?.pictureUrl?.message}
                        helperText="Paste the URL of a JPG or PNG of max 20 kb"
                        inputProps={
                            {
                                ...register("pictureUrl", { validate: { ...isRequired(), ...isValidUrlSize() }})
                            }
                        } />
                    <Input
                        label={"Description"}
                        error={errors?.description?.message}
                        inputProps={
                            {
                                ...register("description", { validate: { ...isRequired(), ...isDescription() }}),
                                maxLength: 300
                            }
                        } />
                    <div>
                        <label>
                        {error?.message}
                        </label>
                    </div>
                    <BtnContainer>
                        <CancelBtn onClick={() => setActive(false)}>CANCEL</CancelBtn>
                        <PrimaryButton>CREATE PLANET</PrimaryButton>
                    </BtnContainer>
                </form>
            </Modal>
        </>
    )
};

export default AddPlanet;
