import { VpcAttachmentDetail } from './VpcAttachmentDetail';


export class VPCProtectsVo {
    public total?: number;
    private 'self_total'?: number | undefined;
    private 'other_total'?: number | undefined;
    private 'protect_vpcs'?: Array<VpcAttachmentDetail> | undefined;
    private 'self_protect_vpcs'?: Array<VpcAttachmentDetail> | undefined;
    private 'other_protect_vpcs'?: Array<VpcAttachmentDetail> | undefined;
    public constructor() { 
    }
    public withTotal(total: number): VPCProtectsVo {
        this['total'] = total;
        return this;
    }
    public withSelfTotal(selfTotal: number): VPCProtectsVo {
        this['self_total'] = selfTotal;
        return this;
    }
    public set selfTotal(selfTotal: number | undefined) {
        this['self_total'] = selfTotal;
    }
    public get selfTotal() {
        return this['self_total'];
    }
    public withOtherTotal(otherTotal: number): VPCProtectsVo {
        this['other_total'] = otherTotal;
        return this;
    }
    public set otherTotal(otherTotal: number | undefined) {
        this['other_total'] = otherTotal;
    }
    public get otherTotal() {
        return this['other_total'];
    }
    public withProtectVpcs(protectVpcs: Array<VpcAttachmentDetail>): VPCProtectsVo {
        this['protect_vpcs'] = protectVpcs;
        return this;
    }
    public set protectVpcs(protectVpcs: Array<VpcAttachmentDetail> | undefined) {
        this['protect_vpcs'] = protectVpcs;
    }
    public get protectVpcs() {
        return this['protect_vpcs'];
    }
    public withSelfProtectVpcs(selfProtectVpcs: Array<VpcAttachmentDetail>): VPCProtectsVo {
        this['self_protect_vpcs'] = selfProtectVpcs;
        return this;
    }
    public set selfProtectVpcs(selfProtectVpcs: Array<VpcAttachmentDetail> | undefined) {
        this['self_protect_vpcs'] = selfProtectVpcs;
    }
    public get selfProtectVpcs() {
        return this['self_protect_vpcs'];
    }
    public withOtherProtectVpcs(otherProtectVpcs: Array<VpcAttachmentDetail>): VPCProtectsVo {
        this['other_protect_vpcs'] = otherProtectVpcs;
        return this;
    }
    public set otherProtectVpcs(otherProtectVpcs: Array<VpcAttachmentDetail> | undefined) {
        this['other_protect_vpcs'] = otherProtectVpcs;
    }
    public get otherProtectVpcs() {
        return this['other_protect_vpcs'];
    }
}