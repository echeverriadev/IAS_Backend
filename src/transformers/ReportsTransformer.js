const format = (data) => {
    console.log(data)
    return {
        id: data.id,
        employee_name: data.employee_name,
        service_name: data.service_name,
        initial_date_hour:data.initial_date_hour,
        final_date_hour:data.final_date_hour,
        status: data.status
    };
};

exports.transform = (data) => {
    if(Array.isArray(data)){
        return data.map(item => {
            return format(item);
        })
    }

    return format(data);
};