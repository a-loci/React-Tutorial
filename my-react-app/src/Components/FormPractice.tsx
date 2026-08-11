import * as z from 'zod';


const VoterInformation = z.object({
  name: z.string().min(1,"You must have a name"),
  state: z.number(),
  socialSecurity: z.number(),
  favoriteColor: z.string().optional().nullish()
})

function VoterForm(){

};


export default VoterForm;