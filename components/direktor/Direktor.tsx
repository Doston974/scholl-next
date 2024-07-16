import React from 'react'
import { Button } from '../ui/button'

const Direktor = () => {
  return (
    <div className="flex justify-between items-center mb-24">
        <div>
            <h1 className='text-3xl w-[400px]'>Bizning Bilim Dargohimiz Derektorining Nutqi</h1>
            <p className="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
            <Button>Bundan tashqari</Button>
        </div>
          <iframe
              width="439"
              height="325"
              src="https://www.youtube.com/embed/mEqJwJwu80A"
              title="Sambutan Kepala Sekolah &amp; Profil SMP DU 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
    </div>
  )
}

export default Direktor