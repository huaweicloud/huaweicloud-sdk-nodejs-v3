

export class ShowCoordinatorsRespCoordinators {
    private 'group_id'?: string | undefined;
    public id?: number;
    public host?: string;
    public port?: number;
    public constructor() { 
    }
    public withGroupId(groupId: string): ShowCoordinatorsRespCoordinators {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withId(id: number): ShowCoordinatorsRespCoordinators {
        this['id'] = id;
        return this;
    }
    public withHost(host: string): ShowCoordinatorsRespCoordinators {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): ShowCoordinatorsRespCoordinators {
        this['port'] = port;
        return this;
    }
}