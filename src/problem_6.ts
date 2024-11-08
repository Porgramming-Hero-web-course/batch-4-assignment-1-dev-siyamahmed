

// Problem number 6 : 

interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, updateProfile: Partial<Profile>): Profile {
    const updatedProfile = { ...profile, ...updateProfile };
    return updatedProfile;
}

const myProfile: Profile = {
    name: "siyam ahmed",
    age: 21,
    email: "dev.siyamahmed@gmail.com"
}

const updateInfo = updateProfile(myProfile, { age: 19 });
console.log(updateInfo);
