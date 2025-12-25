import { ChannelAction } from './ChannelAction';
import { ChannelErrorType } from './ChannelErrorType';
import { ChannelOperationStatus } from './ChannelOperationStatus';
import { ConfigStatus } from './ConfigStatus';
import { HealthStatus } from './HealthStatus';
import { InstallStatus } from './InstallStatus';
import { ReadWrite } from './ReadWrite';


export class Channel {
    public action?: ChannelAction;
    private 'channel_id'?: string;
    private 'config_status'?: ConfigStatus;
    private 'create_by'?: string;
    private 'create_by_user'?: string;
    public description?: string;
    private 'error_type'?: ChannelErrorType;
    private 'health_status'?: HealthStatus;
    private 'input_id'?: string;
    private 'input_name'?: string;
    private 'install_status'?: InstallStatus;
    private 'install_time'?: number;
    private 'node_refer_count'?: number;
    private 'operation_status'?: ChannelOperationStatus;
    private 'output_id'?: string;
    private 'output_name'?: string;
    private 'parser_id'?: string;
    private 'parser_name'?: string;
    private 'read_write'?: ReadWrite;
    public title?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withAction(action: ChannelAction): Channel {
        this['action'] = action;
        return this;
    }
    public withChannelId(channelId: string): Channel {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withConfigStatus(configStatus: ConfigStatus): Channel {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: ConfigStatus  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): ConfigStatus | undefined {
        return this['config_status'];
    }
    public withCreateBy(createBy: string): Channel {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateByUser(createByUser: string): Channel {
        this['create_by_user'] = createByUser;
        return this;
    }
    public set createByUser(createByUser: string  | undefined) {
        this['create_by_user'] = createByUser;
    }
    public get createByUser(): string | undefined {
        return this['create_by_user'];
    }
    public withDescription(description: string): Channel {
        this['description'] = description;
        return this;
    }
    public withErrorType(errorType: ChannelErrorType): Channel {
        this['error_type'] = errorType;
        return this;
    }
    public set errorType(errorType: ChannelErrorType  | undefined) {
        this['error_type'] = errorType;
    }
    public get errorType(): ChannelErrorType | undefined {
        return this['error_type'];
    }
    public withHealthStatus(healthStatus: HealthStatus): Channel {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: HealthStatus  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): HealthStatus | undefined {
        return this['health_status'];
    }
    public withInputId(inputId: string): Channel {
        this['input_id'] = inputId;
        return this;
    }
    public set inputId(inputId: string  | undefined) {
        this['input_id'] = inputId;
    }
    public get inputId(): string | undefined {
        return this['input_id'];
    }
    public withInputName(inputName: string): Channel {
        this['input_name'] = inputName;
        return this;
    }
    public set inputName(inputName: string  | undefined) {
        this['input_name'] = inputName;
    }
    public get inputName(): string | undefined {
        return this['input_name'];
    }
    public withInstallStatus(installStatus: InstallStatus): Channel {
        this['install_status'] = installStatus;
        return this;
    }
    public set installStatus(installStatus: InstallStatus  | undefined) {
        this['install_status'] = installStatus;
    }
    public get installStatus(): InstallStatus | undefined {
        return this['install_status'];
    }
    public withInstallTime(installTime: number): Channel {
        this['install_time'] = installTime;
        return this;
    }
    public set installTime(installTime: number  | undefined) {
        this['install_time'] = installTime;
    }
    public get installTime(): number | undefined {
        return this['install_time'];
    }
    public withNodeReferCount(nodeReferCount: number): Channel {
        this['node_refer_count'] = nodeReferCount;
        return this;
    }
    public set nodeReferCount(nodeReferCount: number  | undefined) {
        this['node_refer_count'] = nodeReferCount;
    }
    public get nodeReferCount(): number | undefined {
        return this['node_refer_count'];
    }
    public withOperationStatus(operationStatus: ChannelOperationStatus): Channel {
        this['operation_status'] = operationStatus;
        return this;
    }
    public set operationStatus(operationStatus: ChannelOperationStatus  | undefined) {
        this['operation_status'] = operationStatus;
    }
    public get operationStatus(): ChannelOperationStatus | undefined {
        return this['operation_status'];
    }
    public withOutputId(outputId: string): Channel {
        this['output_id'] = outputId;
        return this;
    }
    public set outputId(outputId: string  | undefined) {
        this['output_id'] = outputId;
    }
    public get outputId(): string | undefined {
        return this['output_id'];
    }
    public withOutputName(outputName: string): Channel {
        this['output_name'] = outputName;
        return this;
    }
    public set outputName(outputName: string  | undefined) {
        this['output_name'] = outputName;
    }
    public get outputName(): string | undefined {
        return this['output_name'];
    }
    public withParserId(parserId: string): Channel {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
    public withParserName(parserName: string): Channel {
        this['parser_name'] = parserName;
        return this;
    }
    public set parserName(parserName: string  | undefined) {
        this['parser_name'] = parserName;
    }
    public get parserName(): string | undefined {
        return this['parser_name'];
    }
    public withReadWrite(readWrite: ReadWrite): Channel {
        this['read_write'] = readWrite;
        return this;
    }
    public set readWrite(readWrite: ReadWrite  | undefined) {
        this['read_write'] = readWrite;
    }
    public get readWrite(): ReadWrite | undefined {
        return this['read_write'];
    }
    public withTitle(title: string): Channel {
        this['title'] = title;
        return this;
    }
    public withUpdateTime(updateTime: number): Channel {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}