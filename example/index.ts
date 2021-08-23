import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
import { GlobalCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/GlobalCredentials";

import { FunctionGraphClient } from '../services/functionGraph/FunctionGraphClient'
import { CreateFunctionRequest } from '../services/functionGraph/model/CreateFunctionRequest'
import { CreateFunctionRequestBody } from '../services/functionGraph/model/CreateFunctionRequestBody'
import { startZip } from './utils'
import { GetFunctionListRequest } from '../services/functionGraph/model/GetFunctionListRequest';
import { GetFunctionListResponse } from '../services/functionGraph/model/GetFunctionListResponse'
import { UpdateFunctionRequest } from '../services/functionGraph/model/UpdateFunctionRequest'
import { UpdateFunctionRequestBody } from '../services/functionGraph/model/UpdateFunctionRequestBody'
import { DeleteFunctionRequest } from '../services/functionGraph/model/DeleteFunctionRequest'
import express = require('express')



const ak = '6T9ZUN0WWK4SDIAWJVOJ';//#gitignore
const sk = 'JeIqadapRve0GAndO29VvuIpE7XdNh59iUKTktkx';//#gitignore
const domainId = '0bbeba4f1080f3560fe8c011e1ec4960';//#gitignore
const projectId = '0bcc05efb100f2a92f53c011f262dfa0';//#gitignore
// const projectId = '0bbeba4f2500f3562febc0119135baf7'

const app: express.Application = express()
app.get('/createFunction', async function(req: any, res: { send: (arg0: string) => void;}){
    const app: express.Application = express();
    const client = FunctionGraphClient.newBuilder()
        .withCredential(new BasicCredentials()
            .withAk(ak)
            .withSk(sk)
            .withProjectId(projectId)
        )
        .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
        .build();
    const body = new CreateFunctionRequestBody({
        func_name: "function_test_node",
        handler: "index.handler",
        memory_size: 128,
        timeout: 30,
        runtime: "Node.js12.13",
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
app.get('/getFunctionList', async function(req: any, res: { send: (arg0: string) => void;}){    
    const app: express.Application = express();
    const client = FunctionGraphClient.newBuilder()
        .withCredential(new BasicCredentials()
            .withAk(ak)
            .withSk(sk)
            .withProjectId(projectId)
        )
        .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
        .build();
    const result = client.getFunctionList(new GetFunctionListRequest()
        .withPackage('default'))
    result.then(result => {
        res.send("JSON.stringify(result)::" + JSON.stringify(result))
    }).catch(ex => {
        res.send("exception:" + JSON.stringify(ex))
    });
})

app.get('/updateFunction', async function(req: any, res: { send: (arg0: string) => void;}){
    const app: express.Application = express();
    const client = FunctionGraphClient.newBuilder()
        .withCredential(new BasicCredentials()
            .withAk(ak)
            .withSk(sk)
            .withProjectId(projectId)
        )
        .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
        .build();
    const body = new UpdateFunctionRequestBody()
        .withCodeType("zip")
        .withFunctionCode(await startZip("./src"))

    const result = client.updateFunction(new UpdateFunctionRequest()
        .withFunctionUrn("urn:fss:cn-north-4:0bcc05efb100f2a92f53c011f262dfa0:function:default:function_test_node:latest")
        .withBody(body))
    result.then(result => {
        res.send("JSON.stringify(result)::" + JSON.stringify(result))
    }).catch(ex => {
        res.send("exception:" + JSON.stringify(ex))
    });
})

app.get('/deleteFunction', async function(req: any, res: { send: (arg0: string) => void;}){
    const app: express.Application = express();
    const client = FunctionGraphClient.newBuilder()
        .withCredential(new BasicCredentials()
            .withAk(ak)
            .withSk(sk)
            .withProjectId(projectId)
        )
        .withEndpoint('https://functiongraph.cn-north-4.myhuaweicloud.com') //https://developer.huaweicloud.com/endpoint?FunctionGraph
        .build();

    const result = client.deleteFunction(new DeleteFunctionRequest()
        .withFunctionUrn("urn:fss:cn-north-4:0bcc05efb100f2a92f53c011f262dfa0:function:default:function_test_node:latest"))
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
}) 
