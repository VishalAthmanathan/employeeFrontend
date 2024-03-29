export const calculateAge = (birthdate) => {
    const today = new Date();
    const dob = new Date(birthdate);
    const age = today.getFullYear() - dob.getFullYear();
    
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      return age - 1;
    }
    
    return age;
  };
  