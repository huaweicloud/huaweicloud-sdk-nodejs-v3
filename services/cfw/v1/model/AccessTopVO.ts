import { AccessTopMemberVO } from './AccessTopMemberVO';
import { AccessTopStatisticsVO } from './AccessTopStatisticsVO';


export class AccessTopVO {
    private 'deny_count'?: number;
    private 'deny_top_one_acl_id'?: string;
    private 'deny_top_one_acl_name'?: string;
    private 'hit_count'?: number;
    private 'in2out_deny_dst_ip_list'?: Array<AccessTopMemberVO>;
    private 'in2out_deny_dst_port_list'?: Array<AccessTopMemberVO>;
    private 'in2out_deny_dst_region_list'?: Array<AccessTopMemberVO>;
    private 'in2out_deny_src_ip_list'?: Array<AccessTopMemberVO>;
    private 'out2in_deny_dst_ip_list'?: Array<AccessTopMemberVO>;
    private 'out2in_deny_dst_port_list'?: Array<AccessTopMemberVO>;
    private 'out2in_deny_src_ip_list'?: Array<AccessTopMemberVO>;
    private 'out2in_deny_src_port_list'?: Array<AccessTopMemberVO>;
    private 'out2in_deny_src_region_list'?: Array<AccessTopMemberVO>;
    private 'permit_count'?: number;
    private 'permit_top_one_acl_id'?: string;
    private 'permit_top_one_acl_name'?: string;
    public records?: Array<AccessTopStatisticsVO>;
    private 'top_deny_rule_list'?: Array<AccessTopMemberVO>;
    public constructor() { 
    }
    public withDenyCount(denyCount: number): AccessTopVO {
        this['deny_count'] = denyCount;
        return this;
    }
    public set denyCount(denyCount: number  | undefined) {
        this['deny_count'] = denyCount;
    }
    public get denyCount(): number | undefined {
        return this['deny_count'];
    }
    public withDenyTopOneAclId(denyTopOneAclId: string): AccessTopVO {
        this['deny_top_one_acl_id'] = denyTopOneAclId;
        return this;
    }
    public set denyTopOneAclId(denyTopOneAclId: string  | undefined) {
        this['deny_top_one_acl_id'] = denyTopOneAclId;
    }
    public get denyTopOneAclId(): string | undefined {
        return this['deny_top_one_acl_id'];
    }
    public withDenyTopOneAclName(denyTopOneAclName: string): AccessTopVO {
        this['deny_top_one_acl_name'] = denyTopOneAclName;
        return this;
    }
    public set denyTopOneAclName(denyTopOneAclName: string  | undefined) {
        this['deny_top_one_acl_name'] = denyTopOneAclName;
    }
    public get denyTopOneAclName(): string | undefined {
        return this['deny_top_one_acl_name'];
    }
    public withHitCount(hitCount: number): AccessTopVO {
        this['hit_count'] = hitCount;
        return this;
    }
    public set hitCount(hitCount: number  | undefined) {
        this['hit_count'] = hitCount;
    }
    public get hitCount(): number | undefined {
        return this['hit_count'];
    }
    public withIn2outDenyDstIpList(in2outDenyDstIpList: Array<AccessTopMemberVO>): AccessTopVO {
        this['in2out_deny_dst_ip_list'] = in2outDenyDstIpList;
        return this;
    }
    public set in2outDenyDstIpList(in2outDenyDstIpList: Array<AccessTopMemberVO>  | undefined) {
        this['in2out_deny_dst_ip_list'] = in2outDenyDstIpList;
    }
    public get in2outDenyDstIpList(): Array<AccessTopMemberVO> | undefined {
        return this['in2out_deny_dst_ip_list'];
    }
    public withIn2outDenyDstPortList(in2outDenyDstPortList: Array<AccessTopMemberVO>): AccessTopVO {
        this['in2out_deny_dst_port_list'] = in2outDenyDstPortList;
        return this;
    }
    public set in2outDenyDstPortList(in2outDenyDstPortList: Array<AccessTopMemberVO>  | undefined) {
        this['in2out_deny_dst_port_list'] = in2outDenyDstPortList;
    }
    public get in2outDenyDstPortList(): Array<AccessTopMemberVO> | undefined {
        return this['in2out_deny_dst_port_list'];
    }
    public withIn2outDenyDstRegionList(in2outDenyDstRegionList: Array<AccessTopMemberVO>): AccessTopVO {
        this['in2out_deny_dst_region_list'] = in2outDenyDstRegionList;
        return this;
    }
    public set in2outDenyDstRegionList(in2outDenyDstRegionList: Array<AccessTopMemberVO>  | undefined) {
        this['in2out_deny_dst_region_list'] = in2outDenyDstRegionList;
    }
    public get in2outDenyDstRegionList(): Array<AccessTopMemberVO> | undefined {
        return this['in2out_deny_dst_region_list'];
    }
    public withIn2outDenySrcIpList(in2outDenySrcIpList: Array<AccessTopMemberVO>): AccessTopVO {
        this['in2out_deny_src_ip_list'] = in2outDenySrcIpList;
        return this;
    }
    public set in2outDenySrcIpList(in2outDenySrcIpList: Array<AccessTopMemberVO>  | undefined) {
        this['in2out_deny_src_ip_list'] = in2outDenySrcIpList;
    }
    public get in2outDenySrcIpList(): Array<AccessTopMemberVO> | undefined {
        return this['in2out_deny_src_ip_list'];
    }
    public withOut2inDenyDstIpList(out2inDenyDstIpList: Array<AccessTopMemberVO>): AccessTopVO {
        this['out2in_deny_dst_ip_list'] = out2inDenyDstIpList;
        return this;
    }
    public set out2inDenyDstIpList(out2inDenyDstIpList: Array<AccessTopMemberVO>  | undefined) {
        this['out2in_deny_dst_ip_list'] = out2inDenyDstIpList;
    }
    public get out2inDenyDstIpList(): Array<AccessTopMemberVO> | undefined {
        return this['out2in_deny_dst_ip_list'];
    }
    public withOut2inDenyDstPortList(out2inDenyDstPortList: Array<AccessTopMemberVO>): AccessTopVO {
        this['out2in_deny_dst_port_list'] = out2inDenyDstPortList;
        return this;
    }
    public set out2inDenyDstPortList(out2inDenyDstPortList: Array<AccessTopMemberVO>  | undefined) {
        this['out2in_deny_dst_port_list'] = out2inDenyDstPortList;
    }
    public get out2inDenyDstPortList(): Array<AccessTopMemberVO> | undefined {
        return this['out2in_deny_dst_port_list'];
    }
    public withOut2inDenySrcIpList(out2inDenySrcIpList: Array<AccessTopMemberVO>): AccessTopVO {
        this['out2in_deny_src_ip_list'] = out2inDenySrcIpList;
        return this;
    }
    public set out2inDenySrcIpList(out2inDenySrcIpList: Array<AccessTopMemberVO>  | undefined) {
        this['out2in_deny_src_ip_list'] = out2inDenySrcIpList;
    }
    public get out2inDenySrcIpList(): Array<AccessTopMemberVO> | undefined {
        return this['out2in_deny_src_ip_list'];
    }
    public withOut2inDenySrcPortList(out2inDenySrcPortList: Array<AccessTopMemberVO>): AccessTopVO {
        this['out2in_deny_src_port_list'] = out2inDenySrcPortList;
        return this;
    }
    public set out2inDenySrcPortList(out2inDenySrcPortList: Array<AccessTopMemberVO>  | undefined) {
        this['out2in_deny_src_port_list'] = out2inDenySrcPortList;
    }
    public get out2inDenySrcPortList(): Array<AccessTopMemberVO> | undefined {
        return this['out2in_deny_src_port_list'];
    }
    public withOut2inDenySrcRegionList(out2inDenySrcRegionList: Array<AccessTopMemberVO>): AccessTopVO {
        this['out2in_deny_src_region_list'] = out2inDenySrcRegionList;
        return this;
    }
    public set out2inDenySrcRegionList(out2inDenySrcRegionList: Array<AccessTopMemberVO>  | undefined) {
        this['out2in_deny_src_region_list'] = out2inDenySrcRegionList;
    }
    public get out2inDenySrcRegionList(): Array<AccessTopMemberVO> | undefined {
        return this['out2in_deny_src_region_list'];
    }
    public withPermitCount(permitCount: number): AccessTopVO {
        this['permit_count'] = permitCount;
        return this;
    }
    public set permitCount(permitCount: number  | undefined) {
        this['permit_count'] = permitCount;
    }
    public get permitCount(): number | undefined {
        return this['permit_count'];
    }
    public withPermitTopOneAclId(permitTopOneAclId: string): AccessTopVO {
        this['permit_top_one_acl_id'] = permitTopOneAclId;
        return this;
    }
    public set permitTopOneAclId(permitTopOneAclId: string  | undefined) {
        this['permit_top_one_acl_id'] = permitTopOneAclId;
    }
    public get permitTopOneAclId(): string | undefined {
        return this['permit_top_one_acl_id'];
    }
    public withPermitTopOneAclName(permitTopOneAclName: string): AccessTopVO {
        this['permit_top_one_acl_name'] = permitTopOneAclName;
        return this;
    }
    public set permitTopOneAclName(permitTopOneAclName: string  | undefined) {
        this['permit_top_one_acl_name'] = permitTopOneAclName;
    }
    public get permitTopOneAclName(): string | undefined {
        return this['permit_top_one_acl_name'];
    }
    public withRecords(records: Array<AccessTopStatisticsVO>): AccessTopVO {
        this['records'] = records;
        return this;
    }
    public withTopDenyRuleList(topDenyRuleList: Array<AccessTopMemberVO>): AccessTopVO {
        this['top_deny_rule_list'] = topDenyRuleList;
        return this;
    }
    public set topDenyRuleList(topDenyRuleList: Array<AccessTopMemberVO>  | undefined) {
        this['top_deny_rule_list'] = topDenyRuleList;
    }
    public get topDenyRuleList(): Array<AccessTopMemberVO> | undefined {
        return this['top_deny_rule_list'];
    }
}