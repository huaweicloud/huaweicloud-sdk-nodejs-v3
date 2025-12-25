import { ChannelAction } from './ChannelAction';


export class OperationDto {
    public action?: ChannelAction;
    public constructor() { 
    }
    public withAction(action: ChannelAction): OperationDto {
        this['action'] = action;
        return this;
    }
}