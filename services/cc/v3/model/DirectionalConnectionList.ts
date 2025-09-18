import { DirectionalConnection } from './DirectionalConnection';


export class DirectionalConnectionList {
    private 'directional_connections'?: Array<DirectionalConnection>;
    public constructor(directionalConnections?: Array<DirectionalConnection>) { 
        this['directional_connections'] = directionalConnections;
    }
    public withDirectionalConnections(directionalConnections: Array<DirectionalConnection>): DirectionalConnectionList {
        this['directional_connections'] = directionalConnections;
        return this;
    }
    public set directionalConnections(directionalConnections: Array<DirectionalConnection>  | undefined) {
        this['directional_connections'] = directionalConnections;
    }
    public get directionalConnections(): Array<DirectionalConnection> | undefined {
        return this['directional_connections'];
    }
}