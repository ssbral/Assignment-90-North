const PatientCard = ({user}) => {
  return (
        <div className='flex justify-between items-center px-4 py-2 hover:bg-[#D8FCF7] space-x-4 border-b'>
            <div className="flex">
                <div className="mr-2">
                    <img src={user.image} alt={user.name} className='h-10 w-10 rounded-full' />
                </div>
                <div>
                    <p className='text-md font-semibold'>{user.name}</p>
                    <p className='text-sm font-normal text-gray-500'>{user.gender}</p>
                </div>
            </div>
        </div>
  );
}

export default PatientCard;
