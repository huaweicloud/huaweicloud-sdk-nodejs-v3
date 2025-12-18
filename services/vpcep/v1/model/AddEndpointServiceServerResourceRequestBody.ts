import { ServerResource } from './ServerResource';


export class AddEndpointServiceServerResourceRequestBody {
    private 'server_resources'?: Array<ServerResource>;
    public constructor(serverResources?: Array<ServerResource>) { 
        this['server_resources'] = serverResources;
    }
    public withServerResources(serverResources: Array<ServerResource>): AddEndpointServiceServerResourceRequestBody {
        this['server_resources'] = serverResources;
        return this;
    }
    public set serverResources(serverResources: Array<ServerResource>  | undefined) {
        this['server_resources'] = serverResources;
    }
    public get serverResources(): Array<ServerResource> | undefined {
        return this['server_resources'];
    }
}