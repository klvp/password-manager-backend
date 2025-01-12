const responses = {
    "200": ({ data, message }) => ({
        message: "success",
        status: true,
        data
    }),
    "500": ({ data, message }) => ({
        message: data ?? "something went wrong",
        status: false,
        data: null
    }),
    "404": ({ data, message }) => ({
        message: "Data not found",
        status: false,
        data
    })
}

module.exports = responses