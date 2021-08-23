var return_helloworld = function (event, context) {
    const function_name = context.getFunctionName();
    const function_version = context.getVersion();
    const package = context.getPackage();
    const eventKey = event['key'];
    const logger = context.getLogger();
    logger.info(JSON.stringify({
        function_name,
        function_version,
        package,
        eventKey
    }));
}
 
module.exports = {
    print: return_helloworld
};
