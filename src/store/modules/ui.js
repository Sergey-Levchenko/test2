import { UI } from '../mutation-types';

const ui = {
    namespaced: true,
    state: {
        isLoading: false,
        isNotificationHidden: true,
        notificationMessage: 'Some message',
        notificationType: 'success'
    },
    getters: {
        isLoading: state => state.isLoading,
        isNotificationHidden: state => state.isNotificationHidden,
        notification: state => ({
            type: state.notificationType,
            message: state.notificationMessage
        }),
    },
    actions: {
        toggleIsLoading({commit}) {
            commit(UI.TOGGLE_IS_LOADING);
        },
        setNotification({ commit, dispatch }, payload) {
            commit(UI.SET_NOTIFICATION, payload);
            setTimeout(() => {
                dispatch('clearNotification');
            }, 2000);
        },
        clearNotification({ commit }) {
            commit(UI.HIDE_NOTIFICATION);
            setTimeout(() => {
                commit(UI.CLEAR_NOTIFICATION);
            }, 300);
        },
    },
    mutations: {
        [UI.TOGGLE_IS_LOADING](state) {
            state.isLoading = !state.isLoading;
        },
        [UI.SET_NOTIFICATION](state, { value, type, message }) {
            state.isNotificationHidden = value;
            state.notificationType = type;
            state.notificationMessage = message;
        },
        [UI.HIDE_NOTIFICATION](state) {
            state.isNotificationHidden = true;
        },
        [UI.CLEAR_NOTIFICATION](state) {
            state.notificationType = 'success';
            state.notificationMessage = '';
        },
    },
};

export default ui;
