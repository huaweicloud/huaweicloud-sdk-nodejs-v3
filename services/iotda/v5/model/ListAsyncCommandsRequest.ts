

export class ListAsyncCommandsRequest {
    private 'device_id': string | undefined;
    private 'Instance-Id'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public status?: string;
    private 'command_id'?: string | undefined;
    private 'command_name'?: string | undefined;
    public constructor(deviceId: any) { 
        this['device_id'] = deviceId;
    }
    public withDeviceId(deviceId: string): ListAsyncCommandsRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withInstanceId(instanceId: string): ListAsyncCommandsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withLimit(limit: number): ListAsyncCommandsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAsyncCommandsRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListAsyncCommandsRequest {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: string): ListAsyncCommandsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAsyncCommandsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStatus(status: string): ListAsyncCommandsRequest {
        this['status'] = status;
        return this;
    }
    public withCommandId(commandId: string): ListAsyncCommandsRequest {
        this['command_id'] = commandId;
        return this;
    }
    public set commandId(commandId: string | undefined) {
        this['command_id'] = commandId;
    }
    public get commandId() {
        return this['command_id'];
    }
    public withCommandName(commandName: string): ListAsyncCommandsRequest {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName() {
        return this['command_name'];
    }
}