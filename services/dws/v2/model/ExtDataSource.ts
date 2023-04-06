

export class ExtDataSource {
    public id?: string;
    public name?: string;
    public type?: string;
    private 'connect_info'?: string | undefined;
    private 'user_name'?: string | undefined;
    public version?: string;
    private 'configure_status'?: string | undefined;
    public status?: string;
    private 'data_source_id'?: string | undefined;
    public created?: string;
    public updated?: string;
    private 'data_source_updated'?: string | undefined;
    private 'extend_properties'?: object | undefined;
    public description?: string;
    private 'fail_reason'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): ExtDataSource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ExtDataSource {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ExtDataSource {
        this['type'] = type;
        return this;
    }
    public withConnectInfo(connectInfo: string): ExtDataSource {
        this['connect_info'] = connectInfo;
        return this;
    }
    public set connectInfo(connectInfo: string | undefined) {
        this['connect_info'] = connectInfo;
    }
    public get connectInfo() {
        return this['connect_info'];
    }
    public withUserName(userName: string): ExtDataSource {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withVersion(version: string): ExtDataSource {
        this['version'] = version;
        return this;
    }
    public withConfigureStatus(configureStatus: string): ExtDataSource {
        this['configure_status'] = configureStatus;
        return this;
    }
    public set configureStatus(configureStatus: string | undefined) {
        this['configure_status'] = configureStatus;
    }
    public get configureStatus() {
        return this['configure_status'];
    }
    public withStatus(status: string): ExtDataSource {
        this['status'] = status;
        return this;
    }
    public withDataSourceId(dataSourceId: string): ExtDataSource {
        this['data_source_id'] = dataSourceId;
        return this;
    }
    public set dataSourceId(dataSourceId: string | undefined) {
        this['data_source_id'] = dataSourceId;
    }
    public get dataSourceId() {
        return this['data_source_id'];
    }
    public withCreated(created: string): ExtDataSource {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ExtDataSource {
        this['updated'] = updated;
        return this;
    }
    public withDataSourceUpdated(dataSourceUpdated: string): ExtDataSource {
        this['data_source_updated'] = dataSourceUpdated;
        return this;
    }
    public set dataSourceUpdated(dataSourceUpdated: string | undefined) {
        this['data_source_updated'] = dataSourceUpdated;
    }
    public get dataSourceUpdated() {
        return this['data_source_updated'];
    }
    public withExtendProperties(extendProperties: object): ExtDataSource {
        this['extend_properties'] = extendProperties;
        return this;
    }
    public set extendProperties(extendProperties: object | undefined) {
        this['extend_properties'] = extendProperties;
    }
    public get extendProperties() {
        return this['extend_properties'];
    }
    public withDescription(description: string): ExtDataSource {
        this['description'] = description;
        return this;
    }
    public withFailReason(failReason: string): ExtDataSource {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason() {
        return this['fail_reason'];
    }
}