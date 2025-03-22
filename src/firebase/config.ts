// No major changes needed except ensuring exported types are correct
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { Storage } from 'firebase/storage';

// Export with explicit types
export const auth: Auth = getAuth(app);
export const firestore: Firestore = getFirestore(app);
export const storage: Storage = getStorage(app);
export default app as FirebaseApp;