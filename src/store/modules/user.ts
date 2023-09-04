import { defineStore } from 'pinia'

interface userType {
    id:number,
    user_name:string|number
}

export const useUserStore = defineStore('user', {
    state: () => ({ userInfo: null, token: '' }),
    actions: {
        getUserInfo() {

        },
    },
})