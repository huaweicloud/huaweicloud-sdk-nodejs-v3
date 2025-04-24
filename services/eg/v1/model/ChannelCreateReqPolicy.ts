import { ChannelCreateReqPrincipal } from './ChannelCreateReqPrincipal';


export class ChannelCreateReqPolicy {
    private 'Sid'?: string;
    private 'Effect'?: string;
    private 'Principal'?: { [key: string]: ChannelCreateReqPrincipal; };
    private 'Action'?: string;
    private 'Resource'?: string;
    public constructor() { 
    }
    public withSid(sid: string): ChannelCreateReqPolicy {
        this['Sid'] = sid;
        return this;
    }
    public set sid(sid: string  | undefined) {
        this['Sid'] = sid;
    }
    public get sid(): string | undefined {
        return this['Sid'];
    }
    public withEffect(effect: string): ChannelCreateReqPolicy {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: string  | undefined) {
        this['Effect'] = effect;
    }
    public get effect(): string | undefined {
        return this['Effect'];
    }
    public withPrincipal(principal: { [key: string]: ChannelCreateReqPrincipal; }): ChannelCreateReqPolicy {
        this['Principal'] = principal;
        return this;
    }
    public set principal(principal: { [key: string]: ChannelCreateReqPrincipal; }  | undefined) {
        this['Principal'] = principal;
    }
    public get principal(): { [key: string]: ChannelCreateReqPrincipal; } | undefined {
        return this['Principal'];
    }
    public withAction(action: string): ChannelCreateReqPolicy {
        this['Action'] = action;
        return this;
    }
    public set action(action: string  | undefined) {
        this['Action'] = action;
    }
    public get action(): string | undefined {
        return this['Action'];
    }
    public withResource(resource: string): ChannelCreateReqPolicy {
        this['Resource'] = resource;
        return this;
    }
    public set resource(resource: string  | undefined) {
        this['Resource'] = resource;
    }
    public get resource(): string | undefined {
        return this['Resource'];
    }
}