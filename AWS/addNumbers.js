exports.handler = async (event) => {
    const { num1, num2 } = event;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Both num1 and num2 must be numbers.",
            }),
        };
    }

    const sum = num1 + num2;

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Sum calculated successfully.",
            sum: sum,
        }),
    };
};
