import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const todosRef = db.collection('todos')

// todo一覧を管理するtodosを配列で定義する
export const state = () => ({
    todos: []
})

export const actions = {
    // 初期化
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('todos', todosRef)   // bindFirestoreRefにbindしたいdbのnameと参照先を渡すとstateにデータがbindされる（関連づけられるみたいな雰囲気）
    }),
    // 追加
    add: firestoreAction((context, name) => {
        if (name.trim()) {
            todosRef.add({
                name: name,
                done: false,
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }),
    remove: firestoreAction((context, id) => {
        todosRef.doc(id).delete()
    }),
    toggle: firestoreAction((context, todo) => {
        todosRef.doc(todo.id).update({
            done: !todo.done
        })
    })
}