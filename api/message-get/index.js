module.exports = async function (context, req) {
    context.log("JavaScript HTTP trigger function processed a request.");

    context.res.json({
        status: 200,
        body: "Hello from the API!"
    });
}