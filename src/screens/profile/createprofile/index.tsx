import { Button } from '@/components/ui/button';

import React from 'react'


const createProfileAction = async (formData:FormData)=>{
'use server';
const firstName = formData.get('firstName') as string
console.log('ff',firstName);

}

const CreateProfileScreen = () => {
  return (
    <section className='text-2xl font-semibold mb-8 capitalize'>
        <div className='border p-8 rounded-md max-w-lg'>
            <form action={createProfileAction}>
               
                <Button type='submit' size={'lg'}>Create Profile</Button>
            </form>
        </div>

    </section>
  )
}

export default CreateProfileScreen