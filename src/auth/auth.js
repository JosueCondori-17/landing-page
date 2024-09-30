import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'

export const loginEmailPassword = async (eml, contrasena) => {
    try {
        const { user } = await signInWithEmailAndPassword(FirebaseAuth, eml, contrasena);
        const { uid, email } = user
        return { user: { uid, email }, ok: true }
    }
    catch (e) {
        return { user: null, ok: false, errorMessage: e.message }
    }
}
export const registerUserWithEmailPassword = async (eml, password) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, eml, password)
        const { uid } = resp.user
        //   await updateProfile(FirebaseAuth.currentUser, { displayName })
        return { user: { uid, eml, }, ok: true, }
    } catch (error) {
        console.log(error)
        return { user: null, ok: false, errorMessage: error.message }
    }
}




