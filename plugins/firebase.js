import firebase from 'firebase'

// Firebaseの初期化に必要なパラメータをオブジェクトで保持
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSender_Id: process.env.MESSAGING_SENDER_ID,
}

// 二重に初期化されないようにconfigを引数に与えて初期化
if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase