const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const { fileName, fileContent, bucketName } = event;

    if (!fileName || !fileContent || !bucketName) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Missing required parameters: fileName, fileContent, or bucketName.",
            }),
        };
    }

    try {
        
        const decodedFile = Buffer.from(fileContent, "base64");

        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: decodedFile,
        };

        await s3.upload(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `File ${fileName} uploaded successfully to bucket ${bucketName}.`,
            }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Error uploading file to S3.",
                error: error.message,
            }),
        };
    }
};
