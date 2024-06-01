import styled from 'styled-components'

const UserCard = styled.div`
display: flex;
align-items: center;
margin-bottom: 8px;
margin-top: 8px;

img {
    width: 72px;
    height: 72px;
    margin-right: 16px;
    border-radius: 8px;
}
label {
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #121C33;
opacity: 1 !Important;
}
p {
font-weight: 400;
font-size: 12px !important;
line-height: 18px;
color: #121C33;
opacity: 0.6;
width: 250px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
`;

const UserDetails = ({
    pictureUrl,
    title,
    description,
}) => {
    return (
        <UserCard>
            <img src={pictureUrl} alt=""
            />
                    <div>
                        <label>{ title }</label>
                        <p title={description}>{ description }</p>
                    </div>
            </UserCard>
    )
}

export default UserDetails;
