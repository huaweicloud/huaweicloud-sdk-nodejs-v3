import { FunctionGraphClient } from '../services/functionGraph/FunctionGraphClient'
import { CreateFunctionRequest } from '../services/functionGraph/model/CreateFunctionRequest'
import { CreateFunctionRequestBody } from '../services/functionGraph/model/CreateFunctionRequestBody'
import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
import { startZip } from './utils'

import express = require('express')

const ak = '6T9ZUN0WWK4SDIAWJVOJ';//#gitignore
const sk = 'JeIqadapRve0GAndO29VvuIpE7XdNh59iUKTktkx';//#gitignore
const domainId = '0bbeba4f1080f3560fe8c011e1ec4960';//#gitignore
const projectId = '0bcc05efb100f2a92f53c011f262dfa0';//#gitignore

const app: express.Application = express()
app.get('/', async function(req: any, res: { send: (arg0: string) => void;}){
    const client = FunctionGraphClient.newBuilder()
        .withCredential(new BasicCredentials()
            .withAk(ak)
            .withSk(sk)
            .withProjectId(projectId)
        )
        .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
        .build();
    const body = new CreateFunctionRequestBody({
        func_name: "function_test",
        handler: "index.handler",
        memory_size: 128,
        timeout: 30,
        runtime: "Python3.6",
        pkg: "default",
        code_type: "zip"
    })
    .withFunctionCode(await startZip("./src"))
    const result = client.createFunction(new CreateFunctionRequest()
        .withBody(body))
    result.then(result => {
        res.send("JSON.stringify(result)::" + JSON.stringify(result))
    }).catch(ex => {
        res.send("exception:" + JSON.stringify(ex))
    });
})
app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
})