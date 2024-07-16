import React from 'react'
import { Trophy, MapPin, Smile } from 'lucide-react';

const Profile = () => {
    return (
        <div className="flex justify-between gap-12 my-24">
            <div className="flex flex-col items-center gap-4">
                <Trophy size={42}/>
                <h1 className='text-2xl'>Qulaylik</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit laborum qui facilis perspiciatis, ab pariatur! Eaque maxime ratione illum distinctio?</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Smile size={42}/>
                <h1 className='text-2xl'>Tarix</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit laborum qui facilis perspiciatis, ab pariatur! Eaque maxime ratione illum distinctio?</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <MapPin size={42} />
                <h1 className='text-2xl'>Manzil</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit laborum qui facilis perspiciatis, ab pariatur! Eaque maxime ratione illum distinctio?</p>
            </div>
        </div>
    )
}

export default Profile