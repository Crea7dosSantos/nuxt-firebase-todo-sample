import firebase from 'firebase'

// Firebaseの初期化に必要なパラメータをオブジェクトで保持
const config = {
    projectId = process.env.FIREBASE_PROJECT_ID
}

// 二重に初期化されないようにconfigを引数に与えて初期化
if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase