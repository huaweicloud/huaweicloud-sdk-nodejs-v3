import { PrePaidServerEip } from './PrePaidServerEip';


export class PrePaidServerPublicip {
    public id?: string;
    public eip?: PrePaidServerEip;
    private 'delete_on_termination'?: boolean | undefined;
    public constructor() { 
    }
    public withId(id: string): PrePaidServerPublicip {
        this['id'] = id;
        return this;
    }
    public withEip(eip: PrePaidServerEip): PrePaidServerPublicip {
        this['eip'] = eip;
        return this;
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): PrePaidServerPublicip {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination() {
        return this['delete_on_termination'];
    }
}