import axios from "axios";

// const HOST = "https://rent-x-api.herokuapp.com";
const HOST = "http://localhost:4000";


//for add a ClassSchedule
export const addClassScheduleService = async (payload) => {
    try {
        await axios.post(`${HOST}/api/classSchedule`, payload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};

//for update a ClassSchedule
export const updateClassScheduleRecodService = async (Id, payload) => {
    try {
        await axios.put(`${HOST}/api/classSchedule/${Id}`, payload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};

//for delete a ClassSchedule
export const deleteClassScheduleRecodService = async (Id) => {
    try {
        await axios.delete(`${HOST}/api/deleteClassSchedule/${Id}`);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};

//for retrieve all the ClassSchedule records
export const getAllClassScheduleRecodsService = async () => {
    try {
        const response = await axios.get(`${HOST}/api/classSchedule`);
        return {
            ok: true, data: response.data.data
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};