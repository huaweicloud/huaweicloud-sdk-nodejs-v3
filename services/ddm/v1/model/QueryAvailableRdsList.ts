

export class QueryAvailableRdsList {
    public id?: string;
    public projectId?: string;
    public status?: string;
    public name?: string;
    public engineName?: string;
    public engineSoftwareVersion?: string;
    public privateIp?: string;
    public mode?: string;
    public port?: number;
    public azCode?: string;
    public timeZone?: string;
    public constructor() { 
    }
    public withId(id: string): QueryAvailableRdsList {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): QueryAvailableRdsList {
        this['projectId'] = projectId;
        return this;
    }
    public withStatus(status: string): QueryAvailableRdsList {
        this['status'] = status;
        return this;
    }
    public withName(name: string): QueryAvailableRdsList {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): QueryAvailableRdsList {
        this['engineName'] = engineName;
        return this;
    }
    public withEngineSoftwareVersion(engineSoftwareVersion: string): QueryAvailableRdsList {
        this['engineSoftwareVersion'] = engineSoftwareVersion;
        return this;
    }
    public withPrivateIp(privateIp: string): QueryAvailableRdsList {
        this['privateIp'] = privateIp;
        return this;
    }
    public withMode(mode: string): QueryAvailableRdsList {
        this['mode'] = mode;
        return this;
    }
    public withPort(port: number): QueryAvailableRdsList {
        this['port'] = port;
        return this;
    }
    public withAzCode(azCode: string): QueryAvailableRdsList {
        this['azCode'] = azCode;
        return this;
    }
    public withTimeZone(timeZone: string): QueryAvailableRdsList {
        this['timeZone'] = timeZone;
        return this;
    }
}