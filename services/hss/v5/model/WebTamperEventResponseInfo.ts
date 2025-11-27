import { WebTamperEventContainerInfo } from './WebTamperEventContainerInfo';
import { WebTamperEventHostInfo } from './WebTamperEventHostInfo';


export class WebTamperEventResponseInfo {
    private 'file_path'?: string;
    private 'event_description'?: string;
    private 'process_path'?: string;
    private 'process_cmd'?: string;
    private 'process_pid'?: number;
    private 'process_env'?: string;
    private 'web_app_name'?: string;
    private 'event_time'?: number;
    private 'host_info'?: WebTamperEventHostInfo;
    private 'container_info'?: WebTamperEventContainerInfo;
    public constructor() { 
    }
    public withFilePath(filePath: string): WebTamperEventResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withEventDescription(eventDescription: string): WebTamperEventResponseInfo {
        this['event_description'] = eventDescription;
        return this;
    }
    public set eventDescription(eventDescription: string  | undefined) {
        this['event_description'] = eventDescription;
    }
    public get eventDescription(): string | undefined {
        return this['event_description'];
    }
    public withProcessPath(processPath: string): WebTamperEventResponseInfo {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessCmd(processCmd: string): WebTamperEventResponseInfo {
        this['process_cmd'] = processCmd;
        return this;
    }
    public set processCmd(processCmd: string  | undefined) {
        this['process_cmd'] = processCmd;
    }
    public get processCmd(): string | undefined {
        return this['process_cmd'];
    }
    public withProcessPid(processPid: number): WebTamperEventResponseInfo {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withProcessEnv(processEnv: string): WebTamperEventResponseInfo {
        this['process_env'] = processEnv;
        return this;
    }
    public set processEnv(processEnv: string  | undefined) {
        this['process_env'] = processEnv;
    }
    public get processEnv(): string | undefined {
        return this['process_env'];
    }
    public withWebAppName(webAppName: string): WebTamperEventResponseInfo {
        this['web_app_name'] = webAppName;
        return this;
    }
    public set webAppName(webAppName: string  | undefined) {
        this['web_app_name'] = webAppName;
    }
    public get webAppName(): string | undefined {
        return this['web_app_name'];
    }
    public withEventTime(eventTime: number): WebTamperEventResponseInfo {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: number  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): number | undefined {
        return this['event_time'];
    }
    public withHostInfo(hostInfo: WebTamperEventHostInfo): WebTamperEventResponseInfo {
        this['host_info'] = hostInfo;
        return this;
    }
    public set hostInfo(hostInfo: WebTamperEventHostInfo  | undefined) {
        this['host_info'] = hostInfo;
    }
    public get hostInfo(): WebTamperEventHostInfo | undefined {
        return this['host_info'];
    }
    public withContainerInfo(containerInfo: WebTamperEventContainerInfo): WebTamperEventResponseInfo {
        this['container_info'] = containerInfo;
        return this;
    }
    public set containerInfo(containerInfo: WebTamperEventContainerInfo  | undefined) {
        this['container_info'] = containerInfo;
    }
    public get containerInfo(): WebTamperEventContainerInfo | undefined {
        return this['container_info'];
    }
}