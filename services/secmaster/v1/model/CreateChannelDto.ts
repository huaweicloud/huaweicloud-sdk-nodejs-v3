import { ChannelAction } from './ChannelAction';
import { CreateModuleVo } from './CreateModuleVo';
import { NodeVo } from './NodeVo';


export class CreateChannelDto {
    public action?: ChannelAction;
    public description?: string;
    private 'group_id'?: string;
    public input?: Array<CreateModuleVo>;
    public nodes?: Array<NodeVo>;
    public output?: Array<CreateModuleVo>;
    private 'parser_id'?: string;
    public title?: string;
    public constructor(groupId?: string, input?: Array<CreateModuleVo>, nodes?: Array<NodeVo>, output?: Array<CreateModuleVo>, parserId?: string, title?: string) { 
        this['group_id'] = groupId;
        this['input'] = input;
        this['nodes'] = nodes;
        this['output'] = output;
        this['parser_id'] = parserId;
        this['title'] = title;
    }
    public withAction(action: ChannelAction): CreateChannelDto {
        this['action'] = action;
        return this;
    }
    public withDescription(description: string): CreateChannelDto {
        this['description'] = description;
        return this;
    }
    public withGroupId(groupId: string): CreateChannelDto {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withInput(input: Array<CreateModuleVo>): CreateChannelDto {
        this['input'] = input;
        return this;
    }
    public withNodes(nodes: Array<NodeVo>): CreateChannelDto {
        this['nodes'] = nodes;
        return this;
    }
    public withOutput(output: Array<CreateModuleVo>): CreateChannelDto {
        this['output'] = output;
        return this;
    }
    public withParserId(parserId: string): CreateChannelDto {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
    public withTitle(title: string): CreateChannelDto {
        this['title'] = title;
        return this;
    }
}