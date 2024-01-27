import axiosSecure from "./axiosSecure"

// Fetch All Rooms from db
export const getAllRooms = async()=>{
    const {data}=await axiosSecure('/rooms')
    return data
}

// Fetch Single Room from db
export const getRoom = async(id)=>{
    const {data}=await axiosSecure(`/room/${id}`)
    return data
}

