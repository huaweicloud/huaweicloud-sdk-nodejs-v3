import { FilterConnectionType } from './FilterConnectionType';


export class Connection {
    private 'channel_refer_count'?: number;
    private 'connection_id'?: string;
    private 'connection_type'?: FilterConnectionType;
    public description?: string;
    public info?: string;
    private 'module_id'?: string;
    private 'template_title'?: string;
    public title?: string;
    public constructor() { 
    }
    public withChannelReferCount(channelReferCount: number): Connection {
        this['channel_refer_count'] = channelReferCount;
        return this;
    }
    public set channelReferCount(channelReferCount: number  | undefined) {
        this['channel_refer_count'] = channelReferCount;
    }
    public get channelReferCount(): number | undefined {
        return this['channel_refer_count'];
    }
    public withConnectionId(connectionId: string): Connection {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withConnectionType(connectionType: FilterConnectionType): Connection {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: FilterConnectionType  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): FilterConnectionType | undefined {
        return this['connection_type'];
    }
    public withDescription(description: string): Connection {
        this['description'] = description;
        return this;
    }
    public withInfo(info: string): Connection {
        this['info'] = info;
        return this;
    }
    public withModuleId(moduleId: string): Connection {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withTemplateTitle(templateTitle: string): Connection {
        this['template_title'] = templateTitle;
        return this;
    }
    public set templateTitle(templateTitle: string  | undefined) {
        this['template_title'] = templateTitle;
    }
    public get templateTitle(): string | undefined {
        return this['template_title'];
    }
    public withTitle(title: string): Connection {
        this['title'] = title;
        return this;
    }
}