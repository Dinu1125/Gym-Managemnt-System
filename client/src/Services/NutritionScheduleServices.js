import axios from "axios";

// const HOST = "https://rent-x-api.herokuapp.com";
const HOST = "http://localhost:4000";


//for add a NutritionSchedule
export const addNutritionScheduleService = async (payload) => {
    try {
        await axios.post(`${HOST}/api/nutritionSchedule`, payload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};

//for update a NutritionSchedule
export const updateNutritionScheduleRecodService = async (Id, payload) => {
    try {
        await axios.put(`${HOST}/api/nutritionSchedule/${Id}`, payload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};

//for delete a NutritionSchedule
export const deleteNutritionScheduleRecodService = async (Id) => {
    try {
        await axios.delete(`${HOST}/api/nutritionSchedule/${Id}`);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};

//for retrieve all the NutritionSchedule records
export const getAllNutritionScheduleRecodsService = async () => {
    try {
        const response = await axios.get(`${HOST}/api/nutritionSchedule`);
        return {
            ok: true, data: response.data.data
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};