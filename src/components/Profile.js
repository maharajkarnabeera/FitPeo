import ProfilePic from '../assets/Profile_pic.jpg'
const Profile = () => {
    return (
    <div className='h-[36px]'>
        <img className='rounded-full h-full object-cover' width={36} src={ProfilePic} alt='smiling man'/>
    </div> )
}

export default Profile;