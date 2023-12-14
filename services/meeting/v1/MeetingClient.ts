import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { ActiveDTO } from './model/ActiveDTO';
import { AddCorpAdminRequest } from './model/AddCorpAdminRequest';
import { AddCorpAdminResponse } from './model/AddCorpAdminResponse';
import { AddCorpDTO } from './model/AddCorpDTO';
import { AddCorpRequest } from './model/AddCorpRequest';
import { AddCorpResDTO } from './model/AddCorpResDTO';
import { AddCorpResponse } from './model/AddCorpResponse';
import { AddDepartmentRequest } from './model/AddDepartmentRequest';
import { AddDepartmentResponse } from './model/AddDepartmentResponse';
import { AddDeviceDTO } from './model/AddDeviceDTO';
import { AddDeviceRequest } from './model/AddDeviceRequest';
import { AddDeviceResponse } from './model/AddDeviceResponse';
import { AddMaterialRequest } from './model/AddMaterialRequest';
import { AddMaterialRequestBody } from './model/AddMaterialRequestBody';
import { AddMaterialResponse } from './model/AddMaterialResponse';
import { AddProgramRequest } from './model/AddProgramRequest';
import { AddProgramResponse } from './model/AddProgramResponse';
import { AddPublicationRequest } from './model/AddPublicationRequest';
import { AddPublicationResponse } from './model/AddPublicationResponse';
import { AddResourceRequest } from './model/AddResourceRequest';
import { AddResourceResponse } from './model/AddResourceResponse';
import { AddToPersonalSpaceRequest } from './model/AddToPersonalSpaceRequest';
import { AddToPersonalSpaceResponse } from './model/AddToPersonalSpaceResponse';
import { AddUserDTO } from './model/AddUserDTO';
import { AddUserRequest } from './model/AddUserRequest';
import { AddUserRequestBody } from './model/AddUserRequestBody';
import { AddUserResponse } from './model/AddUserResponse';
import { AdminDTO } from './model/AdminDTO';
import { AdminResetPwdReqDTO } from './model/AdminResetPwdReqDTO';
import { AllowClientRecordRequest } from './model/AllowClientRecordRequest';
import { AllowClientRecordResponse } from './model/AllowClientRecordResponse';
import { AllowGuestUnmuteRequest } from './model/AllowGuestUnmuteRequest';
import { AllowGuestUnmuteResponse } from './model/AllowGuestUnmuteResponse';
import { AllowWaitingParticipantRequest } from './model/AllowWaitingParticipantRequest';
import { AllowWaitingParticipantResponse } from './model/AllowWaitingParticipantResponse';
import { AssociateVmrRequest } from './model/AssociateVmrRequest';
import { AssociateVmrResponse } from './model/AssociateVmrResponse';
import { Attendee } from './model/Attendee';
import { AuthorizeConfigInfoRequestBody } from './model/AuthorizeConfigInfoRequestBody';
import { BaseUser } from './model/BaseUser';
import { BatchDeleteCorpAdminsRequest } from './model/BatchDeleteCorpAdminsRequest';
import { BatchDeleteCorpAdminsResponse } from './model/BatchDeleteCorpAdminsResponse';
import { BatchDeleteDevicesRequest } from './model/BatchDeleteDevicesRequest';
import { BatchDeleteDevicesResponse } from './model/BatchDeleteDevicesResponse';
import { BatchDeleteMaterialsRequest } from './model/BatchDeleteMaterialsRequest';
import { BatchDeleteMaterialsResponse } from './model/BatchDeleteMaterialsResponse';
import { BatchDeleteProgramsRequest } from './model/BatchDeleteProgramsRequest';
import { BatchDeleteProgramsResponse } from './model/BatchDeleteProgramsResponse';
import { BatchDeletePublicationsRequest } from './model/BatchDeletePublicationsRequest';
import { BatchDeletePublicationsResponse } from './model/BatchDeletePublicationsResponse';
import { BatchDeleteUsersRequest } from './model/BatchDeleteUsersRequest';
import { BatchDeleteUsersResponse } from './model/BatchDeleteUsersResponse';
import { BatchHandRequest } from './model/BatchHandRequest';
import { BatchHandResponse } from './model/BatchHandResponse';
import { BatchShowUserDetailsRequest } from './model/BatchShowUserDetailsRequest';
import { BatchShowUserDetailsResponse } from './model/BatchShowUserDetailsResponse';
import { BatchUpdateDevicesStatusRequest } from './model/BatchUpdateDevicesStatusRequest';
import { BatchUpdateDevicesStatusResponse } from './model/BatchUpdateDevicesStatusResponse';
import { BatchUpdateUserStatusRequest } from './model/BatchUpdateUserStatusRequest';
import { BatchUpdateUserStatusResponse } from './model/BatchUpdateUserStatusResponse';
import { BroadcastParticipantRequest } from './model/BroadcastParticipantRequest';
import { BroadcastParticipantResponse } from './model/BroadcastParticipantResponse';
import { CPUThresholdData } from './model/CPUThresholdData';
import { CancelBroadcastRequest } from './model/CancelBroadcastRequest';
import { CancelBroadcastResponse } from './model/CancelBroadcastResponse';
import { CancelMeetingRequest } from './model/CancelMeetingRequest';
import { CancelMeetingResponse } from './model/CancelMeetingResponse';
import { CancelRecurringMeetingRequest } from './model/CancelRecurringMeetingRequest';
import { CancelRecurringMeetingResponse } from './model/CancelRecurringMeetingResponse';
import { CancelRecurringSubMeetingRequest } from './model/CancelRecurringSubMeetingRequest';
import { CancelRecurringSubMeetingResponse } from './model/CancelRecurringSubMeetingResponse';
import { CategorySuggestions } from './model/CategorySuggestions';
import { CheckSlideVerifyCodeRequest } from './model/CheckSlideVerifyCodeRequest';
import { CheckSlideVerifyCodeResponse } from './model/CheckSlideVerifyCodeResponse';
import { CheckTokenRequest } from './model/CheckTokenRequest';
import { CheckTokenResponse } from './model/CheckTokenResponse';
import { CheckVeriCodeForUpdateUserInfoRequest } from './model/CheckVeriCodeForUpdateUserInfoRequest';
import { CheckVeriCodeForUpdateUserInfoResponse } from './model/CheckVeriCodeForUpdateUserInfoResponse';
import { CheckVerifyCodeRequest } from './model/CheckVerifyCodeRequest';
import { CheckVerifyCodeResponse } from './model/CheckVerifyCodeResponse';
import { ChildDeptDTO } from './model/ChildDeptDTO';
import { ConfAttendeeRecordInfo } from './model/ConfAttendeeRecordInfo';
import { ConfCtlRecordInfo } from './model/ConfCtlRecordInfo';
import { ConferenceInfo } from './model/ConferenceInfo';
import { CorpAdminDTO } from './model/CorpAdminDTO';
import { CorpBasicDTO } from './model/CorpBasicDTO';
import { CorpBasicInfoDTO } from './model/CorpBasicInfoDTO';
import { CreateAnonymousAuthRandomRequest } from './model/CreateAnonymousAuthRandomRequest';
import { CreateAnonymousAuthRandomResponse } from './model/CreateAnonymousAuthRandomResponse';
import { CreateConfTokenRequest } from './model/CreateConfTokenRequest';
import { CreateConfTokenResponse } from './model/CreateConfTokenResponse';
import { CreateMeetingRequest } from './model/CreateMeetingRequest';
import { CreateMeetingResponse } from './model/CreateMeetingResponse';
import { CreatePortalRefNonceRequest } from './model/CreatePortalRefNonceRequest';
import { CreatePortalRefNonceResponse } from './model/CreatePortalRefNonceResponse';
import { CreateProgramRequestDTO } from './model/CreateProgramRequestDTO';
import { CreatePublicationRequestDTO } from './model/CreatePublicationRequestDTO';
import { CreateRecurringMeetingRequest } from './model/CreateRecurringMeetingRequest';
import { CreateRecurringMeetingResponse } from './model/CreateRecurringMeetingResponse';
import { CreateVisionActiveCodeRequest } from './model/CreateVisionActiveCodeRequest';
import { CreateVisionActiveCodeResponse } from './model/CreateVisionActiveCodeResponse';
import { CreateWebSocketTokenRequest } from './model/CreateWebSocketTokenRequest';
import { CreateWebSocketTokenResponse } from './model/CreateWebSocketTokenResponse';
import { CreateWebinarRequest } from './model/CreateWebinarRequest';
import { CreateWebinarResponse } from './model/CreateWebinarResponse';
import { CycleParams } from './model/CycleParams';
import { CycleSubConf } from './model/CycleSubConf';
import { CycleSubConfConfigDTO } from './model/CycleSubConfConfigDTO';
import { DelAttendInfo } from './model/DelAttendInfo';
import { DeleteAttendeesRequest } from './model/DeleteAttendeesRequest';
import { DeleteAttendeesResponse } from './model/DeleteAttendeesResponse';
import { DeleteCorpRequest } from './model/DeleteCorpRequest';
import { DeleteCorpResponse } from './model/DeleteCorpResponse';
import { DeleteCorpVmrRequest } from './model/DeleteCorpVmrRequest';
import { DeleteCorpVmrResponse } from './model/DeleteCorpVmrResponse';
import { DeleteDepartmentRequest } from './model/DeleteDepartmentRequest';
import { DeleteDepartmentResponse } from './model/DeleteDepartmentResponse';
import { DeleteLayoutRequest } from './model/DeleteLayoutRequest';
import { DeleteLayoutResponse } from './model/DeleteLayoutResponse';
import { DeleteRecordingsRequest } from './model/DeleteRecordingsRequest';
import { DeleteRecordingsResponse } from './model/DeleteRecordingsResponse';
import { DeleteResourceRequest } from './model/DeleteResourceRequest';
import { DeleteResourceResponse } from './model/DeleteResourceResponse';
import { DeleteTokenRequest } from './model/DeleteTokenRequest';
import { DeleteTokenResponse } from './model/DeleteTokenResponse';
import { DeleteVisionActiveCodeRequest } from './model/DeleteVisionActiveCodeRequest';
import { DeleteVisionActiveCodeResponse } from './model/DeleteVisionActiveCodeResponse';
import { DeleteWebHookConfigRequest } from './model/DeleteWebHookConfigRequest';
import { DeleteWebHookConfigResponse } from './model/DeleteWebHookConfigResponse';
import { DeleteWebinarRequest } from './model/DeleteWebinarRequest';
import { DeleteWebinarResponse } from './model/DeleteWebinarResponse';
import { DeptBasicDTO } from './model/DeptBasicDTO';
import { DeptDTO } from './model/DeptDTO';
import { DisassociateVmrRequest } from './model/DisassociateVmrRequest';
import { DisassociateVmrResponse } from './model/DisassociateVmrResponse';
import { ExternalContactBase } from './model/ExternalContactBase';
import { ExternalContactDTO } from './model/ExternalContactDTO';
import { HandRequest } from './model/HandRequest';
import { HandResponse } from './model/HandResponse';
import { HangUpRequest } from './model/HangUpRequest';
import { HangUpResponse } from './model/HangUpResponse';
import { IdMarkDTO } from './model/IdMarkDTO';
import { ImageModerationResult } from './model/ImageModerationResult';
import { InterpreterGroupInfo } from './model/InterpreterGroupInfo';
import { InterpreterInfo } from './model/InterpreterInfo';
import { InviteOperateVideoRequest } from './model/InviteOperateVideoRequest';
import { InviteOperateVideoResponse } from './model/InviteOperateVideoResponse';
import { InviteParticipantRequest } from './model/InviteParticipantRequest';
import { InviteParticipantResponse } from './model/InviteParticipantResponse';
import { InviteShareDTO } from './model/InviteShareDTO';
import { InviteShareRequest } from './model/InviteShareRequest';
import { InviteShareResponse } from './model/InviteShareResponse';
import { InviteUserRequest } from './model/InviteUserRequest';
import { InviteUserResponse } from './model/InviteUserResponse';
import { InviteWithPwdRequest } from './model/InviteWithPwdRequest';
import { InviteWithPwdResponse } from './model/InviteWithPwdResponse';
import { ListHistoryWebinarsRequest } from './model/ListHistoryWebinarsRequest';
import { ListHistoryWebinarsResponse } from './model/ListHistoryWebinarsResponse';
import { ListMeetingFileResponseDTO } from './model/ListMeetingFileResponseDTO';
import { ListOngoingWebinarsRequest } from './model/ListOngoingWebinarsRequest';
import { ListOngoingWebinarsResponse } from './model/ListOngoingWebinarsResponse';
import { ListUpComingWebinarsRequest } from './model/ListUpComingWebinarsRequest';
import { ListUpComingWebinarsResponse } from './model/ListUpComingWebinarsResponse';
import { LiveRequest } from './model/LiveRequest';
import { LiveResponse } from './model/LiveResponse';
import { LockMeetingRequest } from './model/LockMeetingRequest';
import { LockMeetingResponse } from './model/LockMeetingResponse';
import { LockViewRequest } from './model/LockViewRequest';
import { LockViewResponse } from './model/LockViewResponse';
import { Material } from './model/Material';
import { MeetingFileBase } from './model/MeetingFileBase';
import { MeetingStatus } from './model/MeetingStatus';
import { ModAdminDTO } from './model/ModAdminDTO';
import { ModCorpBasicDTO } from './model/ModCorpBasicDTO';
import { ModCorpBasicInfoDTO } from './model/ModCorpBasicInfoDTO';
import { ModCorpDTO } from './model/ModCorpDTO';
import { ModDeptDTO } from './model/ModDeptDTO';
import { ModDeviceDTO } from './model/ModDeviceDTO';
import { ModMemberDTO } from './model/ModMemberDTO';
import { ModPwdReqDTO } from './model/ModPwdReqDTO';
import { ModResourceDTO } from './model/ModResourceDTO';
import { ModUserDTO } from './model/ModUserDTO';
import { ModVmrDTO } from './model/ModVmrDTO';
import { MoveToWaitingRoomRequest } from './model/MoveToWaitingRoomRequest';
import { MoveToWaitingRoomResponse } from './model/MoveToWaitingRoomResponse';
import { MultiPicDisplayDO } from './model/MultiPicDisplayDO';
import { MuteMeetingRequest } from './model/MuteMeetingRequest';
import { MuteMeetingResponse } from './model/MuteMeetingResponse';
import { MuteParticipantRequest } from './model/MuteParticipantRequest';
import { MuteParticipantResponse } from './model/MuteParticipantResponse';
import { OpenAttendeeEntity } from './model/OpenAttendeeEntity';
import { OpenEditConfReq } from './model/OpenEditConfReq';
import { OpenNotifySetting } from './model/OpenNotifySetting';
import { OpenPageInfo } from './model/OpenPageInfo';
import { OpenRoomSettingReq } from './model/OpenRoomSettingReq';
import { OpenRoomSettingVO } from './model/OpenRoomSettingVO';
import { OpenScheduleConfReq } from './model/OpenScheduleConfReq';
import { OpenUploadFileInfo } from './model/OpenUploadFileInfo';
import { OpenWebinarBaseInfo } from './model/OpenWebinarBaseInfo';
import { OpenWebinarHistoryInfo } from './model/OpenWebinarHistoryInfo';
import { OpenWebinarOngoingInfo } from './model/OpenWebinarOngoingInfo';
import { OpenWebinarUpcomingInfo } from './model/OpenWebinarUpcomingInfo';
import { OrgGroupDTO } from './model/OrgGroupDTO';
import { OrgPropertyDTO } from './model/OrgPropertyDTO';
import { PacketThresholdData } from './model/PacketThresholdData';
import { PageParticipant } from './model/PageParticipant';
import { Pages } from './model/Pages';
import { PartAttendee } from './model/PartAttendee';
import { ParticipantInfo } from './model/ParticipantInfo';
import { PasswordEntry } from './model/PasswordEntry';
import { PicInfoNotify } from './model/PicInfoNotify';
import { PicLayoutInfo } from './model/PicLayoutInfo';
import { ProgramItemRequestBase } from './model/ProgramItemRequestBase';
import { ProgramItemResponseBase } from './model/ProgramItemResponseBase';
import { ProgramRequestBase } from './model/ProgramRequestBase';
import { ProgramResponseBase } from './model/ProgramResponseBase';
import { ProlongMeetingRequest } from './model/ProlongMeetingRequest';
import { ProlongMeetingResponse } from './model/ProlongMeetingResponse';
import { ProxyTokenDTO } from './model/ProxyTokenDTO';
import { PublicationRequestBase } from './model/PublicationRequestBase';
import { PublicationResponseBase } from './model/PublicationResponseBase';
import { PublishDeptResponseDTO } from './model/PublishDeptResponseDTO';
import { PublishDeviceResponseDTO } from './model/PublishDeviceResponseDTO';
import { QosConferenceInfo } from './model/QosConferenceInfo';
import { QosCpuInfo } from './model/QosCpuInfo';
import { QosDataElement } from './model/QosDataElement';
import { QosDataNoThrElement } from './model/QosDataNoThrElement';
import { QosInfo } from './model/QosInfo';
import { QosParticipantInfo } from './model/QosParticipantInfo';
import { QosSendReceiveInfo } from './model/QosSendReceiveInfo';
import { QueryAdminResultDTO } from './model/QueryAdminResultDTO';
import { QueryCorpAdminResultDTO } from './model/QueryCorpAdminResultDTO';
import { QueryCorpBasicResultDTO } from './model/QueryCorpBasicResultDTO';
import { QueryCorpGroupDTO } from './model/QueryCorpGroupDTO';
import { QueryCorpResResultDTO } from './model/QueryCorpResResultDTO';
import { QueryCorpResultDTO } from './model/QueryCorpResultDTO';
import { QueryCorpVcResResultDTO } from './model/QueryCorpVcResResultDTO';
import { QueryDeptResultDTO } from './model/QueryDeptResultDTO';
import { QueryDeviceInfoResultDTO } from './model/QueryDeviceInfoResultDTO';
import { QueryDeviceResultDTO } from './model/QueryDeviceResultDTO';
import { QueryDeviceTypeResultDTO } from './model/QueryDeviceTypeResultDTO';
import { QueryOrgVmrResultDTO } from './model/QueryOrgVmrResultDTO';
import { QueryResourceResultDTO } from './model/QueryResourceResultDTO';
import { QueryVisionActiveCodeResultDTO } from './model/QueryVisionActiveCodeResultDTO';
import { QueryVmrPkgResResultDTO } from './model/QueryVmrPkgResResultDTO';
import { QueryVmrResultDTO } from './model/QueryVmrResultDTO';
import { RealTimeAttendee } from './model/RealTimeAttendee';
import { RealTimeConfInfo } from './model/RealTimeConfInfo';
import { RealTimeParticipant } from './model/RealTimeParticipant';
import { RecordDownloadInfoBO } from './model/RecordDownloadInfoBO';
import { RecordDownloadUrlDO } from './model/RecordDownloadUrlDO';
import { RecordRequest } from './model/RecordRequest';
import { RecordResponse } from './model/RecordResponse';
import { RecordResultDO } from './model/RecordResultDO';
import { RenameParticipantRequest } from './model/RenameParticipantRequest';
import { RenameParticipantResponse } from './model/RenameParticipantResponse';
import { ResDetailDTO } from './model/ResDetailDTO';
import { ResetActivecodeRequest } from './model/ResetActivecodeRequest';
import { ResetActivecodeResponse } from './model/ResetActivecodeResponse';
import { ResetPwdByAdminRequest } from './model/ResetPwdByAdminRequest';
import { ResetPwdByAdminResponse } from './model/ResetPwdByAdminResponse';
import { ResetPwdReqDTOV1 } from './model/ResetPwdReqDTOV1';
import { ResetPwdRequest } from './model/ResetPwdRequest';
import { ResetPwdResponse } from './model/ResetPwdResponse';
import { ResetVisionActiveCodeRequest } from './model/ResetVisionActiveCodeRequest';
import { ResetVisionActiveCodeResponse } from './model/ResetVisionActiveCodeResponse';
import { ResourceDTO } from './model/ResourceDTO';
import { RestAllowClientRecordReqBody } from './model/RestAllowClientRecordReqBody';
import { RestAllowUnMuteReqBody } from './model/RestAllowUnMuteReqBody';
import { RestAllowWaitingParticipantReqBody } from './model/RestAllowWaitingParticipantReqBody';
import { RestAttendeeDTO } from './model/RestAttendeeDTO';
import { RestBatchHandsUpReqBody } from './model/RestBatchHandsUpReqBody';
import { RestBulkDelAttendReqBody } from './model/RestBulkDelAttendReqBody';
import { RestBulkHangUpReqBody } from './model/RestBulkHangUpReqBody';
import { RestCancelSingleRecordCycleConfListReqBody } from './model/RestCancelSingleRecordCycleConfListReqBody';
import { RestChairTokenReqBody } from './model/RestChairTokenReqBody';
import { RestChairViewReqBody } from './model/RestChairViewReqBody';
import { RestConfConfigDTO } from './model/RestConfConfigDTO';
import { RestCustomMultiPictureBody } from './model/RestCustomMultiPictureBody';
import { RestHandsUpReqBody } from './model/RestHandsUpReqBody';
import { RestInviteReqBody } from './model/RestInviteReqBody';
import { RestInviteWithPwdReqBody } from './model/RestInviteWithPwdReqBody';
import { RestLockReqBody } from './model/RestLockReqBody';
import { RestLockSiteViewReqBody } from './model/RestLockSiteViewReqBody';
import { RestMixedPictureBody } from './model/RestMixedPictureBody';
import { RestMoveToWaitingRoomReqBody } from './model/RestMoveToWaitingRoomReqBody';
import { RestMuteParticipantReqBody } from './model/RestMuteParticipantReqBody';
import { RestMuteReqBody } from './model/RestMuteReqBody';
import { RestParticipantViewReqBody } from './model/RestParticipantViewReqBody';
import { RestPicLayout } from './model/RestPicLayout';
import { RestPicLayoutBody } from './model/RestPicLayoutBody';
import { RestProlongDurReqBody } from './model/RestProlongDurReqBody';
import { RestRenamePartReqBody } from './model/RestRenamePartReqBody';
import { RestResponse } from './model/RestResponse';
import { RestScheduleConfDTO } from './model/RestScheduleConfDTO';
import { RestScheduleCycleConfDTO } from './model/RestScheduleCycleConfDTO';
import { RestSetAttendeeLanChannelBody } from './model/RestSetAttendeeLanChannelBody';
import { RestSetCohostBody } from './model/RestSetCohostBody';
import { RestSetInterpreterGroupBody } from './model/RestSetInterpreterGroupBody';
import { RestSetLiveReqBody } from './model/RestSetLiveReqBody';
import { RestSetRecordReqBody } from './model/RestSetRecordReqBody';
import { RestSimultaneousInterpretationBody } from './model/RestSimultaneousInterpretationBody';
import { RestSubscriberInPic } from './model/RestSubscriberInPic';
import { RestSwitchModeReqBody } from './model/RestSwitchModeReqBody';
import { RestVideoBody } from './model/RestVideoBody';
import { ResumeSimultaneousInterpretationRequest } from './model/ResumeSimultaneousInterpretationRequest';
import { ResumeSimultaneousInterpretationResponse } from './model/ResumeSimultaneousInterpretationResponse';
import { RollcallParticipantRequest } from './model/RollcallParticipantRequest';
import { RollcallParticipantResponse } from './model/RollcallParticipantResponse';
import { SaveLayoutRequest } from './model/SaveLayoutRequest';
import { SaveLayoutResponse } from './model/SaveLayoutResponse';
import { SearchAttendanceRecordsOfHisMeetingRequest } from './model/SearchAttendanceRecordsOfHisMeetingRequest';
import { SearchAttendanceRecordsOfHisMeetingResponse } from './model/SearchAttendanceRecordsOfHisMeetingResponse';
import { SearchCorpAdminsRequest } from './model/SearchCorpAdminsRequest';
import { SearchCorpAdminsResponse } from './model/SearchCorpAdminsResponse';
import { SearchCorpDirRequest } from './model/SearchCorpDirRequest';
import { SearchCorpDirResponse } from './model/SearchCorpDirResponse';
import { SearchCorpExternalDirRequest } from './model/SearchCorpExternalDirRequest';
import { SearchCorpExternalDirResponse } from './model/SearchCorpExternalDirResponse';
import { SearchCorpRequest } from './model/SearchCorpRequest';
import { SearchCorpResourcesRequest } from './model/SearchCorpResourcesRequest';
import { SearchCorpResourcesResponse } from './model/SearchCorpResourcesResponse';
import { SearchCorpResponse } from './model/SearchCorpResponse';
import { SearchCorpVmrRequest } from './model/SearchCorpVmrRequest';
import { SearchCorpVmrResponse } from './model/SearchCorpVmrResponse';
import { SearchCtlRecordsOfHisMeetingRequest } from './model/SearchCtlRecordsOfHisMeetingRequest';
import { SearchCtlRecordsOfHisMeetingResponse } from './model/SearchCtlRecordsOfHisMeetingResponse';
import { SearchDepartmentByNameRequest } from './model/SearchDepartmentByNameRequest';
import { SearchDepartmentByNameResponse } from './model/SearchDepartmentByNameResponse';
import { SearchDevicesRequest } from './model/SearchDevicesRequest';
import { SearchDevicesResponse } from './model/SearchDevicesResponse';
import { SearchHisMeetingsRequest } from './model/SearchHisMeetingsRequest';
import { SearchHisMeetingsResponse } from './model/SearchHisMeetingsResponse';
import { SearchMaterialsRequest } from './model/SearchMaterialsRequest';
import { SearchMaterialsResponse } from './model/SearchMaterialsResponse';
import { SearchMeetingFileListRequest } from './model/SearchMeetingFileListRequest';
import { SearchMeetingFileListResponse } from './model/SearchMeetingFileListResponse';
import { SearchMeetingsRequest } from './model/SearchMeetingsRequest';
import { SearchMeetingsResponse } from './model/SearchMeetingsResponse';
import { SearchMemberVmrRequest } from './model/SearchMemberVmrRequest';
import { SearchMemberVmrResponse } from './model/SearchMemberVmrResponse';
import { SearchOnlineMeetingsRequest } from './model/SearchOnlineMeetingsRequest';
import { SearchOnlineMeetingsResponse } from './model/SearchOnlineMeetingsResponse';
import { SearchProgramsRequest } from './model/SearchProgramsRequest';
import { SearchProgramsResponse } from './model/SearchProgramsResponse';
import { SearchPublicationsRequest } from './model/SearchPublicationsRequest';
import { SearchPublicationsResponse } from './model/SearchPublicationsResponse';
import { SearchQosHistoryMeetingsRequest } from './model/SearchQosHistoryMeetingsRequest';
import { SearchQosHistoryMeetingsResponse } from './model/SearchQosHistoryMeetingsResponse';
import { SearchQosOnlineMeetingsRequest } from './model/SearchQosOnlineMeetingsRequest';
import { SearchQosOnlineMeetingsResponse } from './model/SearchQosOnlineMeetingsResponse';
import { SearchQosParticipantDetailRequest } from './model/SearchQosParticipantDetailRequest';
import { SearchQosParticipantDetailResponse } from './model/SearchQosParticipantDetailResponse';
import { SearchQosParticipantsRequest } from './model/SearchQosParticipantsRequest';
import { SearchQosParticipantsResponse } from './model/SearchQosParticipantsResponse';
import { SearchRecordingsRequest } from './model/SearchRecordingsRequest';
import { SearchRecordingsResponse } from './model/SearchRecordingsResponse';
import { SearchResourceOpRecordRequest } from './model/SearchResourceOpRecordRequest';
import { SearchResourceOpRecordResponse } from './model/SearchResourceOpRecordResponse';
import { SearchResourceRequest } from './model/SearchResourceRequest';
import { SearchResourceResponse } from './model/SearchResourceResponse';
import { SearchStatisticConferenceInfoRequest } from './model/SearchStatisticConferenceInfoRequest';
import { SearchStatisticConferenceInfoResponse } from './model/SearchStatisticConferenceInfoResponse';
import { SearchStatisticConferenceParticipantRequest } from './model/SearchStatisticConferenceParticipantRequest';
import { SearchStatisticConferenceParticipantResponse } from './model/SearchStatisticConferenceParticipantResponse';
import { SearchStatisticResourceInfoRequest } from './model/SearchStatisticResourceInfoRequest';
import { SearchStatisticResourceInfoResponse } from './model/SearchStatisticResourceInfoResponse';
import { SearchStatisticUserInfoRequest } from './model/SearchStatisticUserInfoRequest';
import { SearchStatisticUserInfoResponse } from './model/SearchStatisticUserInfoResponse';
import { SearchUserResultDTO } from './model/SearchUserResultDTO';
import { SearchUsersRequest } from './model/SearchUsersRequest';
import { SearchUsersResponse } from './model/SearchUsersResponse';
import { SearchVisionActiveCodeRequest } from './model/SearchVisionActiveCodeRequest';
import { SearchVisionActiveCodeResponse } from './model/SearchVisionActiveCodeResponse';
import { SendSlideVerifyCodeRequest } from './model/SendSlideVerifyCodeRequest';
import { SendSlideVerifyCodeResponse } from './model/SendSlideVerifyCodeResponse';
import { SendVeriCodeForChangePwdRequest } from './model/SendVeriCodeForChangePwdRequest';
import { SendVeriCodeForChangePwdResponse } from './model/SendVeriCodeForChangePwdResponse';
import { SendVeriCodeForUpdateUserInfoRequest } from './model/SendVeriCodeForUpdateUserInfoRequest';
import { SendVeriCodeForUpdateUserInfoResponse } from './model/SendVeriCodeForUpdateUserInfoResponse';
import { SetAttendeeLanChannelRequest } from './model/SetAttendeeLanChannelRequest';
import { SetAttendeeLanChannelResponse } from './model/SetAttendeeLanChannelResponse';
import { SetCPUThresholdData } from './model/SetCPUThresholdData';
import { SetCohostRequest } from './model/SetCohostRequest';
import { SetCohostResponse } from './model/SetCohostResponse';
import { SetCustomMultiPictureRequest } from './model/SetCustomMultiPictureRequest';
import { SetCustomMultiPictureResponse } from './model/SetCustomMultiPictureResponse';
import { SetHostViewRequest } from './model/SetHostViewRequest';
import { SetHostViewResponse } from './model/SetHostViewResponse';
import { SetInterpreterGroupRequest } from './model/SetInterpreterGroupRequest';
import { SetInterpreterGroupResponse } from './model/SetInterpreterGroupResponse';
import { SetMultiPictureRequest } from './model/SetMultiPictureRequest';
import { SetMultiPictureResponse } from './model/SetMultiPictureResponse';
import { SetPacketThresholdData } from './model/SetPacketThresholdData';
import { SetParticipantViewRequest } from './model/SetParticipantViewRequest';
import { SetParticipantViewResponse } from './model/SetParticipantViewResponse';
import { SetQosThresholdReq } from './model/SetQosThresholdReq';
import { SetQosThresholdRequest } from './model/SetQosThresholdRequest';
import { SetQosThresholdResponse } from './model/SetQosThresholdResponse';
import { SetRoleRequest } from './model/SetRoleRequest';
import { SetRoleResponse } from './model/SetRoleResponse';
import { SetSsoConfigRequest } from './model/SetSsoConfigRequest';
import { SetSsoConfigResponse } from './model/SetSsoConfigResponse';
import { SetThresholdData } from './model/SetThresholdData';
import { SetWebHookConfigRequest } from './model/SetWebHookConfigRequest';
import { SetWebHookConfigResponse } from './model/SetWebHookConfigResponse';
import { ShowAudienceCountInfo } from './model/ShowAudienceCountInfo';
import { ShowConfOrgRequest } from './model/ShowConfOrgRequest';
import { ShowConfOrgResponse } from './model/ShowConfOrgResponse';
import { ShowCorpAdminRequest } from './model/ShowCorpAdminRequest';
import { ShowCorpAdminResponse } from './model/ShowCorpAdminResponse';
import { ShowCorpBasicInfoRequest } from './model/ShowCorpBasicInfoRequest';
import { ShowCorpBasicInfoResponse } from './model/ShowCorpBasicInfoResponse';
import { ShowCorpRequest } from './model/ShowCorpRequest';
import { ShowCorpResourceRequest } from './model/ShowCorpResourceRequest';
import { ShowCorpResourceResponse } from './model/ShowCorpResourceResponse';
import { ShowCorpResponse } from './model/ShowCorpResponse';
import { ShowDepartmentRequest } from './model/ShowDepartmentRequest';
import { ShowDepartmentResponse } from './model/ShowDepartmentResponse';
import { ShowDeptAndChildDeptRequest } from './model/ShowDeptAndChildDeptRequest';
import { ShowDeptAndChildDeptResponse } from './model/ShowDeptAndChildDeptResponse';
import { ShowDeviceDetailRequest } from './model/ShowDeviceDetailRequest';
import { ShowDeviceDetailResponse } from './model/ShowDeviceDetailResponse';
import { ShowDeviceStatusRequest } from './model/ShowDeviceStatusRequest';
import { ShowDeviceStatusResponse } from './model/ShowDeviceStatusResponse';
import { ShowDeviceTypesRequest } from './model/ShowDeviceTypesRequest';
import { ShowDeviceTypesResponse } from './model/ShowDeviceTypesResponse';
import { ShowHisMeetingDetailRequest } from './model/ShowHisMeetingDetailRequest';
import { ShowHisMeetingDetailResponse } from './model/ShowHisMeetingDetailResponse';
import { ShowLayoutRequest } from './model/ShowLayoutRequest';
import { ShowLayoutResponse } from './model/ShowLayoutResponse';
import { ShowMeetingDetailRequest } from './model/ShowMeetingDetailRequest';
import { ShowMeetingDetailResponse } from './model/ShowMeetingDetailResponse';
import { ShowMeetingFileListRequest } from './model/ShowMeetingFileListRequest';
import { ShowMeetingFileListResponse } from './model/ShowMeetingFileListResponse';
import { ShowMeetingFileRequest } from './model/ShowMeetingFileRequest';
import { ShowMeetingFileResponse } from './model/ShowMeetingFileResponse';
import { ShowMyInfoRequest } from './model/ShowMyInfoRequest';
import { ShowMyInfoResponse } from './model/ShowMyInfoResponse';
import { ShowOnlineMeetingDetailRequest } from './model/ShowOnlineMeetingDetailRequest';
import { ShowOnlineMeetingDetailResponse } from './model/ShowOnlineMeetingDetailResponse';
import { ShowOrgResRequest } from './model/ShowOrgResRequest';
import { ShowOrgResResponse } from './model/ShowOrgResResponse';
import { ShowProgramRequest } from './model/ShowProgramRequest';
import { ShowProgramResponse } from './model/ShowProgramResponse';
import { ShowPublicationRequest } from './model/ShowPublicationRequest';
import { ShowPublicationResponse } from './model/ShowPublicationResponse';
import { ShowQosThresholdRequest } from './model/ShowQosThresholdRequest';
import { ShowQosThresholdResponse } from './model/ShowQosThresholdResponse';
import { ShowRealTimeInfoOfMeetingRequest } from './model/ShowRealTimeInfoOfMeetingRequest';
import { ShowRealTimeInfoOfMeetingResponse } from './model/ShowRealTimeInfoOfMeetingResponse';
import { ShowRecordingDetailRequest } from './model/ShowRecordingDetailRequest';
import { ShowRecordingDetailResponse } from './model/ShowRecordingDetailResponse';
import { ShowRecordingFileDownloadUrlsRequest } from './model/ShowRecordingFileDownloadUrlsRequest';
import { ShowRecordingFileDownloadUrlsResponse } from './model/ShowRecordingFileDownloadUrlsResponse';
import { ShowRegionInfoOfMeetingRequest } from './model/ShowRegionInfoOfMeetingRequest';
import { ShowRegionInfoOfMeetingResponse } from './model/ShowRegionInfoOfMeetingResponse';
import { ShowRoomSettingRequest } from './model/ShowRoomSettingRequest';
import { ShowRoomSettingResponse } from './model/ShowRoomSettingResponse';
import { ShowSpResRequest } from './model/ShowSpResRequest';
import { ShowSpResResponse } from './model/ShowSpResResponse';
import { ShowSpResourceRequest } from './model/ShowSpResourceRequest';
import { ShowSpResourceResponse } from './model/ShowSpResourceResponse';
import { ShowSsoConfigRequest } from './model/ShowSsoConfigRequest';
import { ShowSsoConfigResponse } from './model/ShowSsoConfigResponse';
import { ShowUserDetailRequest } from './model/ShowUserDetailRequest';
import { ShowUserDetailResponse } from './model/ShowUserDetailResponse';
import { ShowUserRequestDTO } from './model/ShowUserRequestDTO';
import { ShowWebHookConfigRequest } from './model/ShowWebHookConfigRequest';
import { ShowWebHookConfigResponse } from './model/ShowWebHookConfigResponse';
import { ShowWebinarRequest } from './model/ShowWebinarRequest';
import { ShowWebinarResponse } from './model/ShowWebinarResponse';
import { SlideVerifyCodeCheckDTO } from './model/SlideVerifyCodeCheckDTO';
import { SlideVerifyCodeSendDTO } from './model/SlideVerifyCodeSendDTO';
import { StartMeetingRequest } from './model/StartMeetingRequest';
import { StartMeetingResponse } from './model/StartMeetingResponse';
import { StartRequest } from './model/StartRequest';
import { StatisticConferenceDataItem } from './model/StatisticConferenceDataItem';
import { StatisticParticipateDataItem } from './model/StatisticParticipateDataItem';
import { StatisticResourceDataItem } from './model/StatisticResourceDataItem';
import { StatisticUserDataItem } from './model/StatisticUserDataItem';
import { StopMeetingRequest } from './model/StopMeetingRequest';
import { StopMeetingResponse } from './model/StopMeetingResponse';
import { SubPicLayoutInfo } from './model/SubPicLayoutInfo';
import { SubscriberInPic } from './model/SubscriberInPic';
import { SwitchModeRequest } from './model/SwitchModeRequest';
import { SwitchModeResponse } from './model/SwitchModeResponse';
import { ThresholdData } from './model/ThresholdData';
import { TokenInfo } from './model/TokenInfo';
import { UpdateContactRequest } from './model/UpdateContactRequest';
import { UpdateContactResponse } from './model/UpdateContactResponse';
import { UpdateCorpBasicInfoRequest } from './model/UpdateCorpBasicInfoRequest';
import { UpdateCorpBasicInfoResponse } from './model/UpdateCorpBasicInfoResponse';
import { UpdateCorpRequest } from './model/UpdateCorpRequest';
import { UpdateCorpResponse } from './model/UpdateCorpResponse';
import { UpdateDepartmentRequest } from './model/UpdateDepartmentRequest';
import { UpdateDepartmentResponse } from './model/UpdateDepartmentResponse';
import { UpdateDeviceRequest } from './model/UpdateDeviceRequest';
import { UpdateDeviceResponse } from './model/UpdateDeviceResponse';
import { UpdateMaterialRequest } from './model/UpdateMaterialRequest';
import { UpdateMaterialRequestDTO } from './model/UpdateMaterialRequestDTO';
import { UpdateMaterialResponse } from './model/UpdateMaterialResponse';
import { UpdateMeetingRequest } from './model/UpdateMeetingRequest';
import { UpdateMeetingResponse } from './model/UpdateMeetingResponse';
import { UpdateMemberVmrRequest } from './model/UpdateMemberVmrRequest';
import { UpdateMemberVmrResponse } from './model/UpdateMemberVmrResponse';
import { UpdateMyInfoRequest } from './model/UpdateMyInfoRequest';
import { UpdateMyInfoResponse } from './model/UpdateMyInfoResponse';
import { UpdateProgramRequest } from './model/UpdateProgramRequest';
import { UpdateProgramRequestDTO } from './model/UpdateProgramRequestDTO';
import { UpdateProgramResponse } from './model/UpdateProgramResponse';
import { UpdatePublicationRequest } from './model/UpdatePublicationRequest';
import { UpdatePublicationRequestDTO } from './model/UpdatePublicationRequestDTO';
import { UpdatePublicationResponse } from './model/UpdatePublicationResponse';
import { UpdatePwdRequest } from './model/UpdatePwdRequest';
import { UpdatePwdResponse } from './model/UpdatePwdResponse';
import { UpdateRecurringMeetingRequest } from './model/UpdateRecurringMeetingRequest';
import { UpdateRecurringMeetingResponse } from './model/UpdateRecurringMeetingResponse';
import { UpdateRecurringSubMeetingRequest } from './model/UpdateRecurringSubMeetingRequest';
import { UpdateRecurringSubMeetingResponse } from './model/UpdateRecurringSubMeetingResponse';
import { UpdateResourceRequest } from './model/UpdateResourceRequest';
import { UpdateResourceResponse } from './model/UpdateResourceResponse';
import { UpdateRoomSettingRequest } from './model/UpdateRoomSettingRequest';
import { UpdateRoomSettingResponse } from './model/UpdateRoomSettingResponse';
import { UpdateStartedConfConfigRequest } from './model/UpdateStartedConfConfigRequest';
import { UpdateStartedConfConfigResponse } from './model/UpdateStartedConfConfigResponse';
import { UpdateStartedConfigReqBody } from './model/UpdateStartedConfigReqBody';
import { UpdateTokenRequest } from './model/UpdateTokenRequest';
import { UpdateTokenResponse } from './model/UpdateTokenResponse';
import { UpdateUserRequest } from './model/UpdateUserRequest';
import { UpdateUserResponse } from './model/UpdateUserResponse';
import { UpdateWebHookConfigStatusRequest } from './model/UpdateWebHookConfigStatusRequest';
import { UpdateWebHookConfigStatusResponse } from './model/UpdateWebHookConfigStatusResponse';
import { UpdateWebinarRequest } from './model/UpdateWebinarRequest';
import { UpdateWebinarResponse } from './model/UpdateWebinarResponse';
import { UploadFileRequest } from './model/UploadFileRequest';
import { UploadFileRequestBody } from './model/UploadFileRequestBody';
import { UploadFileResponse } from './model/UploadFileResponse';
import { UserDTO } from './model/UserDTO';
import { UserFunctionDTO } from './model/UserFunctionDTO';
import { UserInfo } from './model/UserInfo';
import { UserStatusDTO } from './model/UserStatusDTO';
import { UserVmrDTO } from './model/UserVmrDTO';
import { ValidateTokenReqDTO } from './model/ValidateTokenReqDTO';
import { VerificationCodeDTO } from './model/VerificationCodeDTO';
import { VerifyCodeCheckDTO } from './model/VerifyCodeCheckDTO';
import { VerifyCodeSendDTOV1 } from './model/VerifyCodeSendDTOV1';
import { VisionActiveCodeDTO } from './model/VisionActiveCodeDTO';
import { WebHookConfigRequest } from './model/WebHookConfigRequest';
import { YesNoEnum } from './model/YesNoEnum';

export class MeetingClient {
    public static newBuilder(): ClientBuilder<MeetingClient> {
            return new ClientBuilder<MeetingClient>(newClient, 'MeetingCredentials');
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 创建企业，默认管理员及分配资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员创建企业
     * @param {AddCorpDTO} corpDTO 创建企业请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addCorp(addCorpRequest?: AddCorpRequest): Promise<AddCorpResponse> {
        const options = ParamCreater().addCorp(addCorpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业默认管理员添加企业普通管理员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加企业管理员
     * @param {CorpAdminDTO} adminDTO 添加企业管理员请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：会议帐号 * 1：表示第三方帐号。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addCorpAdmin(addCorpAdminRequest?: AddCorpAdminRequest): Promise<AddCorpAdminResponse> {
        const options = ParamCreater().addCorpAdmin(addCorpAdminRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口添加部门，最多支持10级部门，每级子部门最多支持100个，默认企业最大部门数量为10000个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加部门
     * @param {DeptDTO} deptDTO 部门信息。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDepartment(addDepartmentRequest?: AddDepartmentRequest): Promise<AddDepartmentResponse> {
        const options = ParamCreater().addDepartment(addDepartmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口添加专业会议终端。专业会议终端包括DP300/HUAWEI Bar系列/HUAWEI Board/TE系列。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 增加终端
     * @param {AddDeviceDTO} deviceDTO 增加终端请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDevice(addDeviceRequest?: AddDeviceRequest): Promise<AddDeviceResponse> {
        const options = ParamCreater().addDevice(addDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增信息窗素材（上传素材文件）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增信息窗素材
     * @param {any} file 素材文件。 - 只能上传jpg/jpeg/png格式文件，分辨率比率16:9，最大分辨率为3840*2160（推荐） - 请先命名完图片名称再上传
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addMaterial(addMaterialRequest?: AddMaterialRequest): Promise<AddMaterialResponse> {
        const options = ParamCreater().addMaterial(addMaterialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增信息窗节目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增信息窗节目
     * @param {CreateProgramRequestDTO} programDTO 节目信息。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addProgram(addProgramRequest?: AddProgramRequest): Promise<AddProgramResponse> {
        const options = ParamCreater().addProgram(addProgramRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增信息窗发布。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增信息窗发布
     * @param {CreatePublicationRequestDTO} publicationDTO 发布信息。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addPublication(addPublicationRequest?: AddPublicationRequest): Promise<AddPublicationResponse> {
        const options = ParamCreater().addPublication(addPublicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业新增资源发放。该接口同时支持修改，带resourceId后会判断该资源是否存在，存在即修改（支持修改的参数见修改接口），否则按新增处理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员分配企业资源
     * @param {string} corpId 企业id
     * @param {Array<ResourceDTO>} resourceList 待添加的资源列表，最多支持批量处理100个。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addResource(addResourceRequest?: AddResourceRequest): Promise<AddResourceResponse> {
        const options = ParamCreater().addResource(addResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户使用手机扫码后,手机端请求服务端将当前会议纪要文件保存到个人云空间。二维码内容 ：cloudlink://cloudlink.huawei.com/h5page?action&#x3D;SAVE_MEETING_FILE&amp;key1&#x3D;value1&amp;key2&#x3D;value2 。key/value的个数可能变化，终端解析后，在发起后续请求时，将所有key/value存为map，作为入参即可。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存会议纪要到个人云空间
     * @param {{ [key: string]: string; }} info 二维码内容中所有key/value存为的map集合。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addToPersonalSpace(addToPersonalSpaceRequest?: AddToPersonalSpaceRequest): Promise<AddToPersonalSpaceResponse> {
        const options = ParamCreater().addToPersonalSpace(addToPersonalSpaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口添加企业用户。
     * &gt; 默认添加用户后，用户第一次登录华为云会议App或者Portal时需要修改密码。若需关闭第一次登录修改密码，请联系华为销售人员，并提供华为云会议企业ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加用户
     * @param {AddUserDTO} userDTO 添加用户请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addUser(addUserRequest?: AddUserRequest): Promise<AddUserResponse> {
        const options = ParamCreater().addUser(addUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置允许/禁止与会者客户端本地录制（非云端录制）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 允许客户端录制
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {string} participantID 与会者标识。
     * @param {RestAllowClientRecordReqBody} restAllowClientRecordReqBody 允许客户端录制请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowClientRecord(allowClientRecordRequest?: AllowClientRecordRequest): Promise<AllowClientRecordResponse> {
        const options = ParamCreater().allowClientRecord(allowClientRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置与会者是否可以自己解除静音。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 与会者自己解除静音
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestAllowUnMuteReqBody} reqBody 与会者自己解除静音请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowGuestUnmute(allowGuestUnmuteRequest?: AllowGuestUnmuteRequest): Promise<AllowGuestUnmuteResponse> {
        const options = ParamCreater().allowGuestUnmute(allowGuestUnmuteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于允许等候室中的成员进入会议。可以允许全部成员进入会议，或者允许指定成员进入会议。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 准入等候者
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestAllowWaitingParticipantReqBody} restAllowWaitingParticipantReqBody 准入等候者请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowWaitingParticipant(allowWaitingParticipantRequest?: AllowWaitingParticipantRequest): Promise<AllowWaitingParticipantResponse> {
        const options = ParamCreater().allowWaitingParticipant(allowWaitingParticipantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口将云会议室分配给用户、专业会议终端（TE10、TE20、HUAWEI Board、HUAWEI Bar 500及HUAWEI Box系列）、智慧屏TV、电子白板（SmartRooms）、IdeaHub。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分配云会议室
     * @param {string} account 帐号。 * 如果是帐号/密码鉴权方式，是指华为云会议帐号 * 如果是App ID鉴权方式，是指第三方User ID &gt; 一个帐号能分配32个云会议室。 
     * @param {Array<string>} assignList 云会议室ID列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：华为云会议帐号。用于帐号/密码鉴权方式 * 1：第三方User ID，用于App ID鉴权方式 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateVmr(associateVmrRequest?: AssociateVmrRequest): Promise<AssociateVmrResponse> {
        const options = ParamCreater().associateVmr(associateVmrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过该接口批量删除企业管理员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除企业管理员
     * @param {Array<string>} delList 用户的帐号列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：华为云会议帐号。用于帐号/密码鉴权方式 * 1：第三方User ID，用于App ID鉴权方式 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteCorpAdmins(batchDeleteCorpAdminsRequest?: BatchDeleteCorpAdminsRequest): Promise<BatchDeleteCorpAdminsResponse> {
        const options = ParamCreater().batchDeleteCorpAdmins(batchDeleteCorpAdminsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口批量删除专业会议终端，返回删除失败的列表。
     * &gt; 如果需要删除Ideahub、SmartRooms、智慧屏TV请使用[[批量删除用户](https://support.huaweicloud.com/api-meeting/meeting_21_0070.html)](tag:hws)[[批量删除用户](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0070.html)](tag:hk)接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除终端
     * @param {Array<string>} delList 终端序列号列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDevices(batchDeleteDevicesRequest?: BatchDeleteDevicesRequest): Promise<BatchDeleteDevicesResponse> {
        const options = ParamCreater().batchDeleteDevices(batchDeleteDevicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除信息窗素材。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除信息窗素材
     * @param {Array<string>} idsRequestDTO 素材ID列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteMaterials(batchDeleteMaterialsRequest?: BatchDeleteMaterialsRequest): Promise<BatchDeleteMaterialsResponse> {
        const options = ParamCreater().batchDeleteMaterials(batchDeleteMaterialsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除信息窗节目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除信息窗节目
     * @param {Array<string>} idsRequestDTO 节目ID列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePrograms(batchDeleteProgramsRequest?: BatchDeleteProgramsRequest): Promise<BatchDeleteProgramsResponse> {
        const options = ParamCreater().batchDeletePrograms(batchDeleteProgramsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除信息窗发布。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除信息窗发布
     * @param {Array<string>} idsRequestDTO 发布ID列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePublications(batchDeletePublicationsRequest?: BatchDeletePublicationsRequest): Promise<BatchDeletePublicationsResponse> {
        const options = ParamCreater().batchDeletePublications(batchDeletePublicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口批量删除企业用户。删除多个用户时，全部删除成功或者全部删除失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除用户
     * @param {Array<string>} delList 企业用户帐号列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：会议帐号 * 1：第三方帐号 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteUsers(batchDeleteUsersRequest?: BatchDeleteUsersRequest): Promise<BatchDeleteUsersResponse> {
        const options = ParamCreater().batchDeleteUsers(batchDeleteUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于批量设置来宾的举手/放下举手状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量举手
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestBatchHandsUpReqBody} restBatchHandsUpReqBody 批量举手请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchHand(batchHandRequest?: BatchHandRequest): Promise<BatchHandResponse> {
        const options = ParamCreater().batchHand(batchHandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询用户详情，支持指定第三方账号查询详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询用户详情
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {string} [idType] 查询类型。默认是USER_ID。 * USER_ID：表示根据华为云会议用户ID查询用户详情 * THIRD_ACCOUNT：表示根据第三方账号查询用户详情 
     * @param {Array<ShowUserRequestDTO>} [getUserDTOs] 用户ID或第三方账号信息列表。 minLength: 1 maxLength: 200 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowUserDetails(batchShowUserDetailsRequest?: BatchShowUserDetailsRequest): Promise<BatchShowUserDetailsResponse> {
        const options = ParamCreater().batchShowUserDetails(batchShowUserDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口批量修改专业会议终端状态。当硬终端资源到期后，若企业内对应资源的硬终端超过数量后会被系统随机自动停用，此时可通过该接口修改专业会议终端的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改终端状态
     * @param {0 | 1} value 状态。 * 0：启用 * 1：停用 
     * @param {Array<string>} snList 终端序列号列表，当SN对应的终端状态一致的，则忽略该记录。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateDevicesStatus(batchUpdateDevicesStatusRequest?: BatchUpdateDevicesStatusRequest): Promise<BatchUpdateDevicesStatusResponse> {
        const options = ParamCreater().batchUpdateDevicesStatus(batchUpdateDevicesStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口批量修改用户状态，当用户帐号数资源或者电子白板（SmartRooms）资源到期后，若企业内对应资源的用户帐号超过数量后会被系统随机自动停用，此时可通过该接口修改用户的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改用户状态
     * @param {0 | 1} value 用户的新状态。 - 0，启用 - 1，停用
     * @param {Array<string>} accountList 企业用户帐号列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：华为云会议帐号。用于帐号/密码鉴权方式 * 1：第三方User ID，用于App ID鉴权方式 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateUserStatus(batchUpdateUserStatusRequest?: BatchUpdateUserStatusRequest): Promise<BatchUpdateUserStatusResponse> {
        const options = ParamCreater().batchUpdateUserStatus(batchUpdateUserStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于广播指定的与会者。同一时间，只允许一个与会者被广播。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 广播会场
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public broadcastParticipant(broadcastParticipantRequest?: BroadcastParticipantRequest): Promise<BroadcastParticipantResponse> {
        const options = ParamCreater().broadcastParticipant(broadcastParticipantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于取消广播，包括：取消广播多画面，取消广播会场，取消点名会场。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消广播
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelBroadcast(cancelBroadcastRequest?: CancelBroadcastRequest): Promise<CancelBroadcastResponse> {
        const options = ParamCreater().cancelBroadcast(cancelBroadcastRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于取消预约的会议。企业管理员可以取消本企业下用户创建的会议，普通用户只能取消自己创建的会议。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消预约会议
     * @param {string} conferenceID 会议ID。 &gt; 创建会议时返回的conferenceID。不是vmrConferenceID。 
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {number} [type] 取消会议操作类型。默认已召开的会议不能取消。 * 需要结束正在召开的会议
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelMeeting(cancelMeetingRequest?: CancelMeetingRequest): Promise<CancelMeetingResponse> {
        const options = ParamCreater().cancelMeeting(cancelMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于取消周期性会议。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消周期性会议
     * @param {string} conferenceID 会议ID。
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {number} [type] 取消会议操作类型。默认已召开的会议不能取消。 * 1：需要结束正在召开的会议 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelRecurringMeeting(cancelRecurringMeetingRequest?: CancelRecurringMeetingRequest): Promise<CancelRecurringMeetingResponse> {
        const options = ParamCreater().cancelRecurringMeeting(cancelRecurringMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于取消周期性会议的子会议。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消周期性会议的子会议
     * @param {string} conferenceID 会议ID。
     * @param {RestCancelSingleRecordCycleConfListReqBody} reqBody 取消周期会议子会议请求。
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {number} [type] 取消会议操作类型。默认已召开的会议不能取消。 * 1：需要结束正在召开的会议 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelRecurringSubMeeting(cancelRecurringSubMeetingRequest?: CancelRecurringSubMeetingRequest): Promise<CancelRecurringSubMeetingResponse> {
        const options = ParamCreater().cancelRecurringSubMeeting(cancelRecurringSubMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口提供校验滑块验证码。服务器收到请求，返回校验结果。用户在前台界面通过滑块操作匹配图形，使得抠图和原图吻合。然后服务器进行校验滑块验证码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验滑块验证码
     * @param {SlideVerifyCodeCheckDTO} slideVerifyCodeCheckDTO 验证码校验结果信息。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkSlideVerifyCode(checkSlideVerifyCodeRequest?: CheckSlideVerifyCodeRequest): Promise<CheckSlideVerifyCodeResponse> {
        const options = ParamCreater().checkSlideVerifyCode(checkSlideVerifyCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口提供校验token合法性功能。服务器收到请求后，验证token合法性并返回结果。如果参数needGenNewToken为true时，生成新的token并返回。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验Token
     * @param {ValidateTokenReqDTO} validateTokenReqDTO 校验Token请求。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkToken(checkTokenRequest?: CheckTokenRequest): Promise<CheckTokenResponse> {
        const options = ParamCreater().checkToken(checkTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业用户通过该接口校验手机和邮箱对应的验证码，一分钟内记录尝试次数不得超过5次。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验手机和邮箱对应的验证码
     * @param {VerificationCodeDTO} verificationCodeDTO 校验验证码请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkVeriCodeForUpdateUserInfo(checkVeriCodeForUpdateUserInfoRequest?: CheckVeriCodeForUpdateUserInfoRequest): Promise<CheckVeriCodeForUpdateUserInfoResponse> {
        const options = ParamCreater().checkVeriCodeForUpdateUserInfo(checkVeriCodeForUpdateUserInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口提供校验验证码，服务器收到请求，返回结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验验证码
     * @param {VerifyCodeCheckDTO} verifyCodeCheckDTO 校验验证码信息。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkVerifyCode(checkVerifyCodeRequest?: CheckVerifyCodeRequest): Promise<CheckVerifyCodeResponse> {
        const options = ParamCreater().checkVerifyCode(checkVerifyCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于匿名用户入会鉴权。请求根据会议ID和密码鉴权，返回鉴权随机数（可以根据该随机数获取匿名用户信息、会议信息等）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 匿名用户会议鉴权
     * @param {string} conferenceID 会议ID。
     * @param {string} xPassword 会议密码。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAnonymousAuthRandom(createAnonymousAuthRandomRequest?: CreateAnonymousAuthRandomRequest): Promise<CreateAnonymousAuthRandomResponse> {
        const options = ParamCreater().createAnonymousAuthRandom(createAnonymousAuthRandomRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取正在召开会议的会控Token（未开始的会议调用该接口返回失败）。Token有效期是半个小时。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取会控Token
     * @param {string} conferenceID 会议ID。 &gt; 创建会议时返回的conferenceID。不是vmrConferenceID。 
     * @param {string} xPassword 会议的主持人密码。 &gt; 对于会控Token保活场景，不对主持人密码鉴权。
     * @param {number} xLoginType 请求类型。 - 1: 业务固定为1。
     * @param {string} [xConferenceAuthorization] 会控Token。 &gt; * 仅会控Token保活场景需要携带 &gt; * 如果会话已过期并且请求中携带了密码，则进行重新鉴权并回复新的会控Token
     * @param {string} [xNonce] 用户临时nonce token。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConfToken(createConfTokenRequest?: CreateConfTokenRequest): Promise<CreateConfTokenResponse> {
        const options = ParamCreater().createConfToken(createConfTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建立即会议和预约会议。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建会议
     * @param {RestScheduleConfDTO} reqBody 会议创建信息。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMeeting(createMeetingRequest?: CreateMeetingRequest): Promise<CreateMeetingResponse> {
        const options = ParamCreater().createMeeting(createMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过Access Token生成页面免登陆跳转到华为云会议的Portal的nonce信息。获取到nonce信息后，通过链接https://meeting.huaweicloud.com/?lang&#x3D;zh-CN&amp;nonce&#x3D;xxxxxxxxxxxxx#/login进行免登陆跳转。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取页面免登陆跳转的nonce信息
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPortalRefNonce(createPortalRefNonceRequest?: CreatePortalRefNonceRequest): Promise<CreatePortalRefNonceResponse> {
        const options = ParamCreater().createPortalRefNonce(createPortalRefNonceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于预约周期性会议。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建周期性会议
     * @param {RestScheduleConfDTO} reqBody 创建周期会议请求。
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecurringMeeting(createRecurringMeetingRequest?: CreateRecurringMeetingRequest): Promise<CreateRecurringMeetingResponse> {
        const options = ParamCreater().createRecurringMeeting(createRecurringMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员生成智慧屏、电子白板（SmartRooms）、Ideahub的激活码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员生成激活码
     * @param {VisionActiveCodeDTO} visionActivecodeDTO 生成激活码请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVisionActiveCode(createVisionActiveCodeRequest?: CreateVisionActiveCodeRequest): Promise<CreateVisionActiveCodeResponse> {
        const options = ParamCreater().createVisionActiveCode(createVisionActiveCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取会控WebSocket建链的临时Token。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取websocket建链Token
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWebSocketToken(createWebSocketTokenRequest?: CreateWebSocketTokenRequest): Promise<CreateWebSocketTokenResponse> {
        const options = ParamCreater().createWebSocketToken(createWebSocketTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建网络研讨会。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预约网络研讨会
     * @param {OpenScheduleConfReq} createWebinarRequestBody 创建网络研讨会请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWebinar(createWebinarRequest?: CreateWebinarRequest): Promise<CreateWebinarResponse> {
        const options = ParamCreater().createWebinar(createWebinarRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除与会者。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除与会者
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestBulkDelAttendReqBody} reqBody 删除与会者请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAttendees(deleteAttendeesRequest?: DeleteAttendeesRequest): Promise<DeleteAttendeesResponse> {
        const options = ParamCreater().deleteAttendees(deleteAttendeesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除企业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员删除企业
     * @param {string} id 企业id。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCorp(deleteCorpRequest?: DeleteCorpRequest): Promise<DeleteCorpResponse> {
        const options = ParamCreater().deleteCorp(deleteCorpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口删除企业的云会议室。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云会议室
     * @param {Array<string>} delList 云会议室ID列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCorpVmr(deleteCorpVmrRequest?: DeleteCorpVmrRequest): Promise<DeleteCorpVmrResponse> {
        const options = ParamCreater().deleteCorpVmr(deleteCorpVmrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口删除部门。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除部门
     * @param {string} deptCode 部门编码。 &gt; 部门编码为1的根部门不能删除。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDepartment(deleteDepartmentRequest?: DeleteDepartmentRequest): Promise<DeleteDepartmentResponse> {
        const options = ParamCreater().deleteDepartment(deleteDepartmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除当前会议已保存的多画面布局。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除多画面布局
     * @param {string} conferenceID 会议ID。
     * @param {string} uuID 布局UUID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLayout(deleteLayoutRequest?: DeleteLayoutRequest): Promise<DeleteLayoutResponse> {
        const options = ParamCreater().deleteLayout(deleteLayoutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于批量删除会议的录制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除录制
     * @param {string} confUUIDs 会议UUID列表，多个会议UUID之间以英文逗号隔开。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRecordings(deleteRecordingsRequest?: DeleteRecordingsRequest): Promise<DeleteRecordingsResponse> {
        const options = ParamCreater().deleteRecordings(deleteRecordingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业删除资源项，删除资源项后，企业资源总数会自动减少。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员根据删除企业资源
     * @param {string} corpId 企业id。
     * @param {Array<string>} resourceIdList 待删除的资源Id列表，最多支持批量处理100个。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResource(deleteResourceRequest?: DeleteResourceRequest): Promise<DeleteResourceResponse> {
        const options = ParamCreater().deleteResource(deleteResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口提供注销功能。服务器收到请求后，删除该Token。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注销登录
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteToken(deleteTokenRequest?: DeleteTokenRequest): Promise<DeleteTokenResponse> {
        const options = ParamCreater().deleteToken(deleteTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员批量删除激活码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员删除激活码
     * @param {Array<string>} delList 激活码的唯一标识列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVisionActiveCode(deleteVisionActiveCodeRequest?: DeleteVisionActiveCodeRequest): Promise<DeleteVisionActiveCodeResponse> {
        const options = ParamCreater().deleteVisionActiveCode(deleteVisionActiveCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于管理员删除已配置的事件推送设置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件推送
     * @param {string} id 订阅配置记录ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWebHookConfig(deleteWebHookConfigRequest?: DeleteWebHookConfigRequest): Promise<DeleteWebHookConfigResponse> {
        const options = ParamCreater().deleteWebHookConfig(deleteWebHookConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于取消已预约的网络研讨会。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消网络研讨会
     * @param {string} conferenceId 网络研讨会ID。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWebinar(deleteWebinarRequest?: DeleteWebinarRequest): Promise<DeleteWebinarResponse> {
        const options = ParamCreater().deleteWebinar(deleteWebinarRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口回收云会议室。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回收云会议室
     * @param {string} account 帐号。 * 如果是帐号/密码鉴权方式，是指华为云会议帐号 * 如果是App ID鉴权方式，是指第三方User ID 
     * @param {Array<string>} recycleList 云会议室ID列表。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：华为云会议帐号。用于帐号/密码鉴权方式 * 1：第三方User ID，用于App ID鉴权方式 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateVmr(disassociateVmrRequest?: DisassociateVmrRequest): Promise<DisassociateVmrResponse> {
        const options = ParamCreater().disassociateVmr(disassociateVmrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置指定与会者的举手/放下举手状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 举手
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestHandsUpReqBody} restHandsUpReqBody 举手请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public hand(handRequest?: HandRequest): Promise<HandResponse> {
        const options = ParamCreater().hand(handRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于挂断正在通话中的与会者。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 挂断与会者
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestBulkHangUpReqBody} reqBody 挂断与会者请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public hangUp(hangUpRequest?: HangUpRequest): Promise<HangUpResponse> {
        const options = ParamCreater().hangUp(hangUpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于邀请指定与会者开启、关闭摄像头。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主持人邀请与会者开启/关闭摄像头
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 被邀请的与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestVideoBody} reqBody 主持人邀请与会者开启/关闭摄像头请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public inviteOperateVideo(inviteOperateVideoRequest?: InviteOperateVideoRequest): Promise<InviteOperateVideoResponse> {
        const options = ParamCreater().inviteOperateVideo(inviteOperateVideoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于邀请与会者加入会议。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 邀请与会者
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestInviteReqBody} reqBody 邀请与会者请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public inviteParticipant(inviteParticipantRequest?: InviteParticipantRequest): Promise<InviteParticipantResponse> {
        const options = ParamCreater().inviteParticipant(inviteParticipantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于邀请/取消邀请指定与会人共享桌面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 邀请共享
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 被邀请的与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {InviteShareDTO} reqBody 邀请共享请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public inviteShare(inviteShareRequest?: InviteShareRequest): Promise<InviteShareResponse> {
        const options = ParamCreater().inviteShare(inviteShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过手机号码或者邮箱地址邀请用户加入企业。
     * * 若被邀请用户在华为云会议系统中不存在，则：
     *   - 华为云会议免费版和华为云会议标准版发送短信/邮件邀请用户完成注册后加入企业。用户注册成功后，加入该企业。
     *   - 华为云会议旗舰版在企业内直接添加该用户。用户会收到华为云会议的初始密码，用户第一次以手机号或者邮箱登录时，需要修改密码。
     * * 若被邀请用户在华为云会议系统中存在，则该用户会收到短信或者邮件确认。确认完成后改用户加入企业内。该用户的密码保持原来的密码不变。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 邀请用户
     * @param {AddUserRequestBody} userDTO 要求用户请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public inviteUser(inviteUserRequest?: InviteUserRequest): Promise<InviteUserResponse> {
        const options = ParamCreater().inviteUser(inviteUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于通过会议ID和密码邀请与会者。一般用于App已知会议ID和来宾密码，通过扫码等方式获取其他终端的SIP号码后，使用该接口将其他终端邀请加入会议中。
     * &gt; 需要管理员在企业的“会议设置”&gt;“来宾扫码邀请任意硬终端入会”设置成打开，才允许通过来宾密码邀请其他终端入会。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过会议ID和密码邀请与会者
     * @param {string} conferenceID 会议ID。
     * @param {RestInviteWithPwdReqBody} reqBody 会议信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public inviteWithPwd(inviteWithPwdRequest?: InviteWithPwdRequest): Promise<InviteWithPwdResponse> {
        const options = ParamCreater().inviteWithPwd(inviteWithPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询历史网络研讨会。管理员可查询企业内历史网络研讨会，非管理员可查询个人历史网络研讨会。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史召开的网络研讨会列表
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持帐号、SIP号码、名称、手机、邮箱模糊搜索。
     * @param {string} [sortType] 查询结果排序。默认升序。 * ASC_StartTIME：按会议开始时间升序排序 * DSC_StartTIME：按会议开始时间降序排序 
     * @param {string} [startTime] 开始时间（UTC时间）, 格式：yyyy-MM-dd HH:mm。
     * @param {string} [endTime] 结束时间（UTC时间）, 格式：yyyy-MM-dd HH:mm。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHistoryWebinars(listHistoryWebinarsRequest?: ListHistoryWebinarsRequest): Promise<ListHistoryWebinarsResponse> {
        const options = ParamCreater().listHistoryWebinars(listHistoryWebinarsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询正在召开的网络研讨会。管理员可查询企业内正在召开网络研讨会，非管理员可查询自己预订的正在召开的网络研讨会。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询正在召开的网络研讨会列表
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持帐号、SIP号码、名称、手机、邮箱模糊搜索。
     * @param {string} [sortType] 查询结果排序。默认升序。 * ASC_StartTIME：按会议开始时间升序排序 * DSC_StartTIME：按会议开始时间降序排序 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOngoingWebinars(listOngoingWebinarsRequest?: ListOngoingWebinarsRequest): Promise<ListOngoingWebinarsResponse> {
        const options = ParamCreater().listOngoingWebinars(listOngoingWebinarsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询即将召开的网络研讨会。管理员可查询企业内即将召开网络研讨会，非管理员可查询自己预订的即将召开的网络研讨会。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询即将召开的网络研讨会列表
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持帐号、SIP号码、名称、手机、邮箱模糊搜索。
     * @param {string} [sortType] 查询结果排序。默认升序。 * ASC_StartTIME：按会议开始时间升序排序 * DSC_StartTIME：按会议开始时间降序排序 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUpComingWebinars(listUpComingWebinarsRequest?: ListUpComingWebinarsRequest): Promise<ListUpComingWebinarsResponse> {
        const options = ParamCreater().listUpComingWebinars(listUpComingWebinarsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于启动或停止会议直播。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启停会议直播
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestSetLiveReqBody} restSetLiveReqBody 启停会议直播请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public live(liveRequest?: LiveRequest): Promise<LiveResponse> {
        const options = ParamCreater().live(liveRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于锁定或解锁会议。锁定会议后，不允许新的来宾主动加入会议。会议锁定后使用主持人密码/主持人链接加入会议或者主持人邀请来宾不受影响。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 锁定会议
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestLockReqBody} restLockReqBody 锁定会议请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public lockMeeting(lockMeetingRequest?: LockMeetingRequest): Promise<LockMeetingResponse> {
        const options = ParamCreater().lockMeeting(lockMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于锁定或者解锁某在线会场的视频源。只适用于专业会议终端（如TE系列等）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 锁定会场视频源
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 专业会议终端的与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestLockSiteViewReqBody} reqBody 锁定会场视频源请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public lockView(lockViewRequest?: LockViewRequest): Promise<LockViewResponse> {
        const options = ParamCreater().lockView(lockViewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于将会中的指定与会者移入到等候室。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移入等候室
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestMoveToWaitingRoomReqBody} restMoveToWaitingRoomReqBody 消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public moveToWaitingRoom(moveToWaitingRoomRequest?: MoveToWaitingRoomRequest): Promise<MoveToWaitingRoomResponse> {
        const options = ParamCreater().moveToWaitingRoom(moveToWaitingRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置整个会议所有与会者（主持人除外）的静音/取消静音状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全场静音
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestMuteReqBody} restMuteReqBody 全场静音请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public muteMeeting(muteMeetingRequest?: MuteMeetingRequest): Promise<MuteMeetingResponse> {
        const options = ParamCreater().muteMeeting(muteMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置指定与会者静音/取消静音状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 静音与会者
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestMuteParticipantReqBody} restMuteParticipantReqBody 静音与会者请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public muteParticipant(muteParticipantRequest?: MuteParticipantRequest): Promise<MuteParticipantResponse> {
        const options = ParamCreater().muteParticipant(muteParticipantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于延长会议时间。默认会议自动延长。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 延长会议
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestProlongDurReqBody} restProlongDurReqBody 延长会议请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public prolongMeeting(prolongMeetingRequest?: ProlongMeetingRequest): Promise<ProlongMeetingResponse> {
        const options = ParamCreater().prolongMeeting(prolongMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于启动或停止会议云录制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启停会议录制
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestSetRecordReqBody} restSetRecordReqBody 启停会议录制请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public record(recordRequest?: RecordRequest): Promise<RecordResponse> {
        const options = ParamCreater().record(recordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重命名某个与会者。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重命名与会者
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestRenamePartReqBody} restRenamePartReqBody 重命名与会者请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public renameParticipant(renameParticipantRequest?: RenameParticipantRequest): Promise<RenameParticipantResponse> {
        const options = ParamCreater().renameParticipant(renameParticipantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当硬终端激活码失效时，企业管理员可以通过该接口重置激活码，使用重新获取的激活码激活终端，每24小时可重新激活5次。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员通过sn重置激活码
     * @param {string} sn 终端序列号，仅可包含数字、字母和下划线。
     * @param {ActiveDTO} activeDTO 重置激活码请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetActivecode(resetActivecodeRequest?: ResetActivecodeRequest): Promise<ResetActivecodeResponse> {
        const options = ParamCreater().resetActivecode(resetActivecodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口提供给用户重置密码功能，服务器收到请求，重新设置用户密码并返回结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用户重置密码
     * @param {ResetPwdReqDTOV1} resetPwdReqDTOV1 忘记密码信息。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPwd(resetPwdRequest?: ResetPwdRequest): Promise<ResetPwdResponse> {
        const options = ParamCreater().resetPwd(resetPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口提供企业管理员重置企业成员密码的功能。当服务器收到重置密码的请求时，发送新的密码到企业成员的邮箱或者短信，并返回结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员重置企业成员密码
     * @param {AdminResetPwdReqDTO} adminResetPwdReqDTO 重置密码信息。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPwdByAdmin(resetPwdByAdminRequest?: ResetPwdByAdminRequest): Promise<ResetPwdByAdminResponse> {
        const options = ParamCreater().resetPwdByAdmin(resetPwdByAdminRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员重置帐号的激活码，重置后，原设备直接解绑，必须重新激活使用,若手机邮箱不填，则不会发送新的激活码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员重置帐号的激活码
     * @param {string} account 华为云会议帐号。 可通过[[分页查询用户](https://support.huaweicloud.com/api-meeting/meeting_21_0071.html)](tag:hws)[[分页查询用户](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0071.html)](tag:hk)接口获取，对应接口返回userAccount字段。 
     * @param {ActiveDTO} activeDTO 重置激活码请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetVisionActiveCode(resetVisionActiveCodeRequest?: ResetVisionActiveCodeRequest): Promise<ResetVisionActiveCodeResponse> {
        const options = ParamCreater().resetVisionActiveCode(resetVisionActiveCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于会议主席可以通过该接口开启/关闭同声传译。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭同声传译
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestSimultaneousInterpretationBody} restSimultaneousInterpretationBody 启动、停止同声传译请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resumeSimultaneousInterpretation(resumeSimultaneousInterpretationRequest?: ResumeSimultaneousInterpretationRequest): Promise<ResumeSimultaneousInterpretationResponse> {
        const options = ParamCreater().resumeSimultaneousInterpretation(resumeSimultaneousInterpretationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于点名指定与会者。点名会场的效果是除了主持人外，点名与会者为非静音状态，未点名的与会者统一为静音状态。同一时间，只允许一个与会者被点名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 点名会场
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollcallParticipant(rollcallParticipantRequest?: RollcallParticipantRequest): Promise<RollcallParticipantResponse> {
        const options = ParamCreater().rollcallParticipant(rollcallParticipantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于保存多画面布局。保存的多画面布局，只能在当前会议使用，会议结束后，保存的多画面布局就会释放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存多画面布局
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestPicLayoutBody} restPicLayoutBody 消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveLayout(saveLayoutRequest?: SaveLayoutRequest): Promise<SaveLayoutResponse> {
        const options = ParamCreater().saveLayout(saveLayoutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定历史会议的与会者记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史会议的与会者记录
     * @param {string} confUUID 会议UUID。
     * @param {number} [offset] 查询偏移量。默认为0。
     * @param {number} [limit] 查询数量。默认值20，最大500条。
     * @param {string} [searchKey] 查询条件 。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [acceptLanguage] 语言。默认简体中文。 - zh-CN: 简体中文。 - en-US: 美国英文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchAttendanceRecordsOfHisMeeting(searchAttendanceRecordsOfHisMeetingRequest?: SearchAttendanceRecordsOfHisMeetingRequest): Promise<SearchAttendanceRecordsOfHisMeetingResponse> {
        const options = ParamCreater().searchAttendanceRecordsOfHisMeeting(searchAttendanceRecordsOfHisMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SP管理员分页搜索企业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员分页搜索企业
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件，支持名称、手机、邮箱、帐号模糊搜索。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCorp(searchCorpRequest?: SearchCorpRequest): Promise<SearchCorpResponse> {
        const options = ParamCreater().searchCorp(searchCorpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过该接口分页查询企业管理员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询企业管理员
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页。
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件，支持名称、手机、邮箱、帐号、第三方帐号模糊搜索。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCorpAdmins(searchCorpAdminsRequest?: SearchCorpAdminsRequest): Promise<SearchCorpAdminsResponse> {
        const options = ParamCreater().searchCorpAdmins(searchCorpAdminsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业用户（含管理员）通过该接口查询该企业的通讯录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业通讯录
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持帐号、SIP号码、名称、手机、邮箱模糊搜索。
     * @param {string} [deptCode] 部门编码。 
     * @param {boolean} [querySubDept] 是否查询子部门下的用户。 默认值：true。 
     * @param {string} [searchScope] 搜索范围。默认值为ALL。 * NORMAL_USER - 查询普通用户。返回普通用户（响应中isHardTerminal&#x3D;false，type&#x3D;NORMAL_USER） * HARD_TERMINAL - 查询硬终端用户。返回大屏用户（响应中isHardTerminal&#x3D;false，type&#x3D;WHITE_BOARD）和硬终端用户（响应中isHardTerminal&#x3D;true，type&#x3D;HARD_TERMINAL） * ALL - 查询所有用户。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCorpDir(searchCorpDirRequest?: SearchCorpDirRequest): Promise<SearchCorpDirResponse> {
        const options = ParamCreater().searchCorpDir(searchCorpDirRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业用户（含管理员）通过该接口查询该企业的外部联系人或者个人外部联系人。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业外部联系人
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持名称、手机、邮箱模糊搜索。
     * @param {string} [searchScope] 搜索范围。默认值为ALL。 * PERSONAL - 查询个人外部联系人 * CORP - 查询企业外部联系人 * ALL - 查询所有外部联系人 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCorpExternalDir(searchCorpExternalDirRequest?: SearchCorpExternalDirRequest): Promise<SearchCorpExternalDirResponse> {
        const options = ParamCreater().searchCorpExternalDir(searchCorpExternalDirRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员根据条件查询企业资源订单列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员分页查询企业资源订单列表
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件，支持resourceId模糊查询。
     * @param {number} [startExpireDate] 查询过期时间在该时间戳之后的资源项。
     * @param {number} [endExpireDate] 查询过期时间在该时间戳之前的资源项。
     * @param {string} [type] 资源类型。 - VMR        - 云会议室 - CONF_CALL  - 会议并发数 - HARD_1080P - 1080P硬终端 - HARD_720P  - 720P硬终端 - SOFT       - 软终端用户数 - ROOM       - 大屏软终端 - LIVE       - 直播推流 - RECORD     - 录播空间 - HARD_THIRD_PARTY - 第三方硬终端帐号 - HUAWEI_VISION -智慧屏 &gt; 查询网络研讨会资源时type字段为VMR。 
     * @param {number} [vmrMode] VMR模式，type为VMR时传递该参数 * 0：个人会议ID * 1：云会议室 * 2：网络研讨会 
     * @param {string} [typeId] 资源类型Id,若想搜索5方VMR时，需携带5方vmrpkg对应的id。
     * @param {string} [orderId] 订单Id。
     * @param {number} [status] 订单状态。 - 0：正常 - 1：到期 - 2：停用 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCorpResources(searchCorpResourcesRequest?: SearchCorpResourcesRequest): Promise<SearchCorpResourcesResponse> {
        const options = ParamCreater().searchCorpResources(searchCorpResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口分页查询企业的云会议室。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员分页查询企业云会议室
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持云会议室名称、ID及分配的用户、硬终端名称模糊搜索。
     * @param {number} [vmrMode] VMR模式。不填则默认为云会议室。 - 1：云会议室 - 2：网络研讨会 
     * @param {number} [status] 云会议室状态。不填则查询所有。 * 0：正常 * 1：停用 * 2：未分配 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCorpVmr(searchCorpVmrRequest?: SearchCorpVmrRequest): Promise<SearchCorpVmrResponse> {
        const options = ParamCreater().searchCorpVmr(searchCorpVmrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定历史会议的会控记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史会议的会控记录
     * @param {string} confUUID 会议UUID。
     * @param {number} [offset] 查询偏移量。默认为0。
     * @param {number} [limit] 查询数量。默认值20，最大500条。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [acceptLanguage] 语言。默认简体中文。 - zh-CN: 简体中文。 - en-US: 美国英文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCtlRecordsOfHisMeeting(searchCtlRecordsOfHisMeetingRequest?: SearchCtlRecordsOfHisMeetingRequest): Promise<SearchCtlRecordsOfHisMeetingResponse> {
        const options = ParamCreater().searchCtlRecordsOfHisMeeting(searchCtlRecordsOfHisMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口按名称查询所有的部门。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按名称查询所有的部门
     * @param {string} deptName 部门名称。 长度： 1-128位。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchDepartmentByName(searchDepartmentByNameRequest?: SearchDepartmentByNameRequest): Promise<SearchDepartmentByNameResponse> {
        const options = ParamCreater().searchDepartmentByName(searchDepartmentByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口分页查询专业会议终端信息。
     * &gt; 如果需要查询Ideahub、SmartRooms、智慧屏TV请使用[[分页查询用户](https://support.huaweicloud.com/api-meeting/meeting_21_0071.html)](tag:hws)[[分页查询用户](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0071.html)](tag:hk)接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询终端
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量，若超过最大数量，则返回最后一页。
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持名称、SN模糊查询。
     * @param {string} [model] 终端型号，枚举类型。当前支持TE系列硬件终端，具体的终端类型可以通过获取所有终端类型接口查询。
     * @param {string} [deptCode] 部门编码，默认为根部门。 默认值：1。
     * @param {boolean} [enableSubDept] 是否查询子部门。 默认值：true。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchDevices(searchDevicesRequest?: SearchDevicesRequest): Promise<SearchDevicesResponse> {
        const options = ParamCreater().searchDevices(searchDevicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询已经结束的会议。管理员可以查询本企业内所有的历史会议，普通用户仅能查询自己创建或者被邀请的历史会议。不带查询参数时，默认查询权限范围内的历史会议。
     * &gt; * 普通用户如果只是通过会议ID或者会议链接接入会议，不是预定者会前邀请或者会中主持人邀请的，则历史会议中无法查到
     * &gt; * 如果同一个会议召开并结束多次，则会产生多条历史会议（会议ID相同，会议UUID不同）
     * &gt; * 历史会议记录默认保留6个月，最长保留12个月。保留时间管理员可在“会议设置”的“历史会议留存时间”中修改
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史会议列表
     * @param {number} startDate 查询的起始时间戳（单位毫秒）。
     * @param {number} endDate 查询的截止时间戳（单位毫秒）。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。
     * @param {number} [offset] 查询偏移量。默认为0。
     * @param {number} [limit] 查询数量。默认是20，最大500条。
     * @param {string} [searchKey] 查询条件。会议主题、会议预约人和会议ID等可作为搜索内容。
     * @param {boolean} [queryAll] 是否查询企业下所有用户的历史会议。 * true：查询所有用户的历史会议 * false：仅查询管理员自己的历史会议 &gt; 仅对企业管理员生效。
     * @param {string} [sortType] 查询结果排序类型。 * ASC_StartTIME：根据会议开始时间升序排序 * DSC_StartTIME：根据会议开始时间降序排序 * ASC_RecordTYPE：根据是否具有录播文件排序，之后默认按照会议开始时间升序排序 * DSC_RecordTYPE：根据是否含有录播文件排序，之后默认按照会议开始时间降序排序
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchHisMeetings(searchHisMeetingsRequest?: SearchHisMeetingsRequest): Promise<SearchHisMeetingsResponse> {
        const options = ParamCreater().searchHisMeetings(searchHisMeetingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询信息窗素材。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询信息窗素材
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持素材名称、更新人模糊搜索。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchMaterials(searchMaterialsRequest?: SearchMaterialsRequest): Promise<SearchMaterialsResponse> {
        const options = ParamCreater().searchMaterials(searchMaterialsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户查询自己的会议纪要列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询会议纪要列表
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchMeetingFileList(searchMeetingFileListRequest?: SearchMeetingFileListRequest): Promise<SearchMeetingFileListResponse> {
        const options = ParamCreater().searchMeetingFileList(searchMeetingFileListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询尚未结束的会议。
     * * 管理员可以查询管理权限域内所有的会议，普通用户仅能查询自己创建或者需要参加的会议。不带查询参数时，默认查询权限范围内正在召开或还未召开的会议。
     * * 只能查询尚未结束的会议（既正在召开的会议和已预约还未召开的会议）。如果需要查询历史会议列表，请参考[[查询历史会议列表](https://support.huaweicloud.com/api-meeting/meeting_21_0051.html)](tag:hws)[[查询历史会议列表](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0051.html)](tag:hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询会议列表
     * @param {string} [userUUID] 用户的UUID。 &gt; 仅管理员有权限查询本企业其他用户的会议列表；普通帐号该字段无效，只能查询自己的。 
     * @param {number} [offset] 查询偏移量。默认为0。
     * @param {number} [limit] 查询数量。默认是20，最大500条。
     * @param {boolean} [queryAll] 是否查询企业下所有用户的会议记录。默认值为false。 * true：查询所有用户的会议 * false：仅查询管理员自己创建的会议 &gt; 仅对企业管理员生效。
     * @param {string} [searchKey] 查询条件。会议主题、会议预约人和会议ID等可作为搜索内容。长度限制为1-128个字符。
     * @param {string} [queryConfMode] 查询时间范围。 - ADAY:  一天 - AWEEK:  一周 - AMONTH:  一个月 - ALL:  查询所有
     * @param {string} [sortType] 查询结果排序。 - ASC_StartTIME:  按会议开始时间升序排序 - DSC_StartTIME:  按会议开始时间降序排序
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchMeetings(searchMeetingsRequest?: SearchMeetingsRequest): Promise<SearchMeetingsResponse> {
        const options = ParamCreater().searchMeetings(searchMeetingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业用户通过该接口查询个人已分配的云会议室及个人会议ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 普通用户分页查询云会议室及个人会议ID
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。支持云会议室名称、ID模糊搜索。
     * @param {boolean} [specialVmr] 查询VMR的类型。不填则查询所有类型。 * false:个人会议ID * true:云会议室 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchMemberVmr(searchMemberVmrRequest?: SearchMemberVmrRequest): Promise<SearchMemberVmrResponse> {
        const options = ParamCreater().searchMemberVmr(searchMemberVmrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询正在召开的会议列表。管理员可以查询本企业内所有在线会议，普通用户仅能查询当前自己帐号创建或者需要参加的在线会议。不带查询参数时，默认查询权限范围内的在线会议，按开始时间升序排列。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询在线会议列表
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。
     * @param {number} [offset] 查询偏移量。默认为0。
     * @param {number} [limit] 查询数量。默认是20，最大500条。
     * @param {boolean} [queryAll] 指定是否查询企业下所有用户的在线会议。默认值是false。 * true：查询所有用户的在线会议 * false：仅查询管理员自己的在线会议 &gt; 仅对企业管理员生效。
     * @param {string} [searchKey] 查询条件 。会议主题、会议预约人和会议ID等可作为搜索内容。长度限制为1-128个字符。
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchOnlineMeetings(searchOnlineMeetingsRequest?: SearchOnlineMeetingsRequest): Promise<SearchOnlineMeetingsResponse> {
        const options = ParamCreater().searchOnlineMeetings(searchOnlineMeetingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取信息窗节目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询信息窗节目
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件，支持节目名称、更新人模糊搜索。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchPrograms(searchProgramsRequest?: SearchProgramsRequest): Promise<SearchProgramsResponse> {
        const options = ParamCreater().searchPrograms(searchProgramsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取信息窗发布。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询信息窗发布
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件，支持名称模糊搜索。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchPublications(searchPublicationsRequest?: SearchPublicationsRequest): Promise<SearchPublicationsResponse> {
        const options = ParamCreater().searchPublications(searchPublicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询会议录制列表。管理员可以查询本企业内所有的录制，普通用户仅能查询自己创建的会议的录制。不带查询参数时，默认查询权限范围内的录制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制列表
     * @param {number} startDate 查询的起始时间戳（单位毫秒）。
     * @param {number} endDate 查询的截止时间戳（单位毫秒）。
     * @param {string} [userUUID] 用户的UUID。 &gt; 仅管理员有权限查询本企业其他用户的会议录制；普通帐号该字段无效，只能查询自己的。
     * @param {number} [offset] 指定返回的页面索引。该值必须大于0。 default: 0
     * @param {number} [limit] 查询数量。默认是20，最大500条。
     * @param {boolean} [queryAll] 是否查询企业下所有用户的历史会议。 * true：查询所有用户的会议录制 * false：仅查询管理员自己的会议录制 &gt; 仅对企业管理员生效。
     * @param {string} [searchKey] 查询条件。会议主题、会议预约人和会议ID等可作为搜索内容。
     * @param {string} [sortType] 查询结果排序类型。 - ASC_StartTIME：按录制开始时间升序排序 - DSC_StartTIME：按录制开始时间降序排序
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchRecordings(searchRecordingsRequest?: SearchRecordingsRequest): Promise<SearchRecordingsResponse> {
        const options = ParamCreater().searchRecordings(searchRecordingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SP根据条件查询企业的资源项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员根据分页查询企业资源
     * @param {string} corpId 企业id。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。
     * @param {number} [startExpireDate] 查询过期时间在该时间戳之后的资源项。
     * @param {number} [endExpireDate] 查询过期时间在该时间戳之前的资源项。
     * @param {string} [type] 资源类型。
     * @param {string} [typeId] 资源类型Id,若想搜索5方VMR时，需携带5方vmrpkg对应的id。
     * @param {number} [status] 订单状态: - 0：正常 - 1：到期，仅查询时返回 - 2：停用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchResource(searchResourceRequest?: SearchResourceRequest): Promise<SearchResourceResponse> {
        const options = ParamCreater().searchResource(searchResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SP根据根据条件查询企业的资源操作记录，支持根据resourceId模糊搜索。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员分页查询企业资源操作记录
     * @param {string} corpId 企业id。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件。
     * @param {number} [startExpireDate] 查询过期时间在该时间戳之后的订单操作记录。
     * @param {number} [endExpireDate] 查询过期时间在该时间戳之前的订单操作记录。
     * @param {number} [startOperateDate] 查询操作时间在该时间戳之后的订单操作记录。
     * @param {number} [endOperateDate] 查询操作时间在该时间戳之前的订单操作记录。
     * @param {string} [type] 订单资源类型。
     * @param {string} [typeId] 当前仅当资源类型为vmr时生效。
     * @param {number} [operateType] 操作类型。 - 0：添加 - 1：删除 - 2：修改 - 3：停用 - 4：启用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchResourceOpRecord(searchResourceOpRecordRequest?: SearchResourceOpRecordRequest): Promise<SearchResourceOpRecordResponse> {
        const options = ParamCreater().searchResourceOpRecord(searchResourceOpRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口分页查询企业用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询用户
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页。
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件，支持名称、手机、邮箱、帐号、第三方帐号模糊搜索。
     * @param {string} [sortField] 排序字段名称 支持的取值： - userType - adminType - ldapAccount - deptCode - status - sortLevel
     * @param {boolean} [isAsc] 是否按升序排序。
     * @param {string} [deptCode] 部门编码，不带则查询所有。
     * @param {boolean} [enableSubDept] 是否查询子部门。 默认值: true 
     * @param {1 | 2} [adminType] 根据管理员类型查询。 * 1：普通管理员 * 2：非管理员 
     * @param {boolean} [enableRoom] 是否开启智能协同白板功能功能位，不带则搜索所有。 &gt; 该参数将废弃，请勿使用。 
     * @param {Array<number>} [userType] 用户类型。默认2。 * 2：普通用户 * 12：智慧屏用户 * 13：ideaHub用户 * 14: SmartRooms用户 
     * @param {number} [status] 用户状态。不带则查询所有。 * 0：正常 * 1：停用。 
     * @param {boolean} [containsUnActive] 是否查询未激活的终端。 默认值: false 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchUsers(searchUsersRequest?: SearchUsersRequest): Promise<SearchUsersResponse> {
        const options = ParamCreater().searchUsers(searchUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员分页查询激活码，支持激活码、终端名称模糊查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员分页查询激活码
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [offset] 查询偏移量,若超过最大数量，则返回最后一页的数据。 默认值：0。 
     * @param {number} [limit] 查询数量。 默认值：10。 
     * @param {string} [searchKey] 搜索条件,支持激活码、终端名称模糊搜索。
     * @param {string} [devType] 终端类型。 - idea-hub:智能协作大屏 - huawei-vision:智慧屏TV - welink-desktop(iwb):SmartRooms会议版 - smart-rooms：SmartRooms完整版 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchVisionActiveCode(searchVisionActiveCodeRequest?: SearchVisionActiveCodeRequest): Promise<SearchVisionActiveCodeResponse> {
        const options = ParamCreater().searchVisionActiveCode(searchVisionActiveCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口提供发送滑块验证码。服务器收到请求，返回抠图以及抠图后的原图等结果。需要在前台界面显示出抠图以及抠图后的原图，用户通过滑块操作来匹配图形。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送滑块验证码
     * @param {SlideVerifyCodeSendDTO} slideVerifyCodeSendDTO 滑块验证码信息。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendSlideVerifyCode(sendSlideVerifyCodeRequest?: SendSlideVerifyCodeRequest): Promise<SendSlideVerifyCodeResponse> {
        const options = ParamCreater().sendSlideVerifyCode(sendSlideVerifyCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口提供发送验证码，服务器收到请求，发送验证码到邮箱或者短信并返回结果。用户在前台界面通过滑块验证后，再进行发送验证码操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送验证码
     * @param {VerifyCodeSendDTOV1} verifyCodeSendDTOV1 发送验证码请求信息。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendVeriCodeForChangePwd(sendVeriCodeForChangePwdRequest?: SendVeriCodeForChangePwdRequest): Promise<SendVeriCodeForChangePwdResponse> {
        const options = ParamCreater().sendVeriCodeForChangePwd(sendVeriCodeForChangePwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用户手机或邮箱时，需要获取验证码。企业用户通过该接口获取验证码，系统会向用户的手机或邮箱发送，验证码1分钟内有效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取验证码
     * @param {VerificationCodeDTO} verificationCodeDTO 获取验证码请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendVeriCodeForUpdateUserInfo(sendVeriCodeForUpdateUserInfoRequest?: SendVeriCodeForUpdateUserInfoRequest): Promise<SendVeriCodeForUpdateUserInfoResponse> {
        const options = ParamCreater().sendVeriCodeForUpdateUserInfo(sendVeriCodeForUpdateUserInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 主持人通过该接口设置某些普通与会者(包括主持人)加入哪个语言频道。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置普通与会人的语言频道
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestSetAttendeeLanChannelBody} restSetAttendeeLanChannelBody 设置与会者语言频道请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAttendeeLanChannel(setAttendeeLanChannelRequest?: SetAttendeeLanChannelRequest): Promise<SetAttendeeLanChannelResponse> {
        const options = ParamCreater().setAttendeeLanChannel(setAttendeeLanChannelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置联席主持人或释放联席主持人。只能将来宾设置为联席主持人。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请联席主持人
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestSetCohostBody} restSetCohostBody 申请联席主持人请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setCohost(setCohostRequest?: SetCohostRequest): Promise<SetCohostResponse> {
        const options = ParamCreater().setCohost(setCohostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置会中多画面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置自定义多画面
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestCustomMultiPictureBody} [reqBody] 设置自定义多画面请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setCustomMultiPicture(setCustomMultiPictureRequest?: SetCustomMultiPictureRequest): Promise<SetCustomMultiPictureResponse> {
        const options = ParamCreater().setCustomMultiPicture(setCustomMultiPictureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于主持人轮询、主持人选看多画面、主持人选看会场操作。只适用于专业会议终端（如TE系列等）为主持人的场景。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主持人选看
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestChairViewReqBody} reqBody 主持人选看请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setHostView(setHostViewRequest?: SetHostViewRequest): Promise<SetHostViewResponse> {
        const options = ParamCreater().setHostView(setHostViewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 主持人通过该接口设置传译组，每个传译组支持两种语言，传译组内支持多个传译员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置传译组
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestSetInterpreterGroupBody} restSetInterpreterGroupBody 设置传译组请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setInterpreterGroup(setInterpreterGroupRequest?: SetInterpreterGroupRequest): Promise<SetInterpreterGroupResponse> {
        const options = ParamCreater().setInterpreterGroup(setInterpreterGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置会议多画面。该接口废弃不用，请使用“[[设置自定义多画面](https://support.huaweicloud.com/api-meeting/meeting_21_0418.html)](tag:hws)[[设置自定义多画面](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0418.html)](tag:hk)”接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置多画面
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestMixedPictureBody} reqBody 设置多画面请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setMultiPicture(setMultiPictureRequest?: SetMultiPictureRequest): Promise<SetMultiPictureResponse> {
        const options = ParamCreater().setMultiPicture(setMultiPictureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于专业会议终端（如TE系列等）选看其他与会者。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 会场选看
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 专业会议终端的与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestParticipantViewReqBody} reqBody 会场选看请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setParticipantView(setParticipantViewRequest?: SetParticipantViewRequest): Promise<SetParticipantViewResponse> {
        const options = ParamCreater().setParticipantView(setParticipantViewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置主持人或释放主持人。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请主持人
     * @param {string} conferenceID 会议ID。
     * @param {string} participantID 与会者标识。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestChairTokenReqBody} restChairTokenReqBody 申请主持人请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRole(setRoleRequest?: SetRoleRequest): Promise<SetRoleResponse> {
        const options = ParamCreater().setRole(setRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置SSO登录的鉴权配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置SSO登录配置
     * @param {AuthorizeConfigInfoRequestBody} authorizeConfigInfo SSO登录配置。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSsoConfig(setSsoConfigRequest?: SetSsoConfigRequest): Promise<SetSsoConfigResponse> {
        const options = ParamCreater().setSsoConfig(setSsoConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于管理员设置企业级会议事件订阅配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置事件推送
     * @param {WebHookConfigRequest} request 会议推送参数配置请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setWebHookConfig(setWebHookConfigRequest?: SetWebHookConfigRequest): Promise<SetWebHookConfigResponse> {
        const options = ParamCreater().setWebHookConfig(setWebHookConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SP管理员根据会议ID查询该会议归属的企业ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员查询会议归属企业
     * @param {string} conferenceID 会议ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfOrg(showConfOrgRequest?: ShowConfOrgRequest): Promise<ShowConfOrgResponse> {
        const options = ParamCreater().showConfOrg(showConfOrgRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取企业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员查询企业
     * @param {string} id 企业id。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCorp(showCorpRequest?: ShowCorpRequest): Promise<ShowCorpResponse> {
        const options = ParamCreater().showCorp(showCorpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过该接口查询企业管理员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业管理员
     * @param {string} account 企业用户帐号。 * 如果是帐号/密码鉴权方式，是指华为云会议帐号 * 如果是App ID鉴权方式，是指第三方User ID 
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：华为云会议帐号。用于帐号/密码鉴权方式 * 1：第三方User ID，用于App ID鉴权方式 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCorpAdmin(showCorpAdminRequest?: ShowCorpAdminRequest): Promise<ShowCorpAdminResponse> {
        const options = ParamCreater().showCorpAdmin(showCorpAdminRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口查询企业注册信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员查询企业注册信息
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCorpBasicInfo(showCorpBasicInfoRequest?: ShowCorpBasicInfoRequest): Promise<ShowCorpBasicInfoResponse> {
        const options = ParamCreater().showCorpBasicInfo(showCorpBasicInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口查询企业内资源及业务权限，包括查询已使用的资源情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员查询企业内资源及业务权限
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCorpResource(showCorpResourceRequest?: ShowCorpResourceRequest): Promise<ShowCorpResourceResponse> {
        const options = ParamCreater().showCorpResource(showCorpResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过部门编码查询部门信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过部门编码查询部门信息
     * @param {string} deptCode 部门编码。 
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDepartment(showDepartmentRequest?: ShowDepartmentRequest): Promise<ShowDepartmentResponse> {
        const options = ParamCreater().showDepartment(showDepartmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口查询部门及其一级子部门列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询部门及其一级子部门列表
     * @param {string} deptCode 部门编码。 &gt; 根部门的部门编码是1。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeptAndChildDept(showDeptAndChildDeptRequest?: ShowDeptAndChildDeptRequest): Promise<ShowDeptAndChildDeptResponse> {
        const options = ParamCreater().showDeptAndChildDept(showDeptAndChildDeptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口查询专业会议终端详情。
     * &gt; 如果需要查询Ideahub、SmartRooms、智慧屏TV详情请使用[[查询用户详情](https://support.huaweicloud.com/api-meeting/meeting_21_0069.html)](tag:hws)[[查询用户详情](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0069.html)](tag:hk)接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端详情
     * @param {string} sn 终端SN号，仅可包含数字、字母和下划线。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceDetail(showDeviceDetailRequest?: ShowDeviceDetailRequest): Promise<ShowDeviceDetailResponse> {
        const options = ParamCreater().showDeviceDetail(showDeviceDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用本接口可以查询硬终端的状态。
     * 硬终端与发起查询请求的帐号需在同一企业下，否则会鉴权失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备状态
     * @param {Array<string>} modelNumber 所请求查询的终端的号码。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceStatus(showDeviceStatusRequest?: ShowDeviceStatusRequest): Promise<ShowDeviceStatusResponse> {
        const options = ParamCreater().showDeviceStatus(showDeviceStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口获取所有的专业会议终端类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有终端类型
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceTypes(showDeviceTypesRequest?: ShowDeviceTypesRequest): Promise<ShowDeviceTypesResponse> {
        const options = ParamCreater().showDeviceTypes(showDeviceTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用户查询指定历史会议的详情。管理员可以查询本企业内所有的历史会议详情，普通用户仅能查询自己创建或者被邀请的历史会议详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史会议详情
     * @param {string} confUUID 会议UUID。
     * @param {number} [offset] 查询偏移量。默认为0。针对PageParticipant 中的与会者分页。
     * @param {number} [limit] 查询数量。默认值20。
     * @param {string} [searchKey] 查询条件 。会议主题、会议预约人和会议ID等可作为搜索内容。长度限制为1-128个字符。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {number} [xType] 默认值为0。 0: 不区分会议室和与会人。 1：分页查询区分会议室和与会人，结果合并返回。 2：单独查询会议室与与会人，结果也是单独返回。
     * @param {number} [xQueryType] 当X-Type为2时，该字段有效。默认值为0。 0: 查询与会人。 1：查询终端。
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHisMeetingDetail(showHisMeetingDetailRequest?: ShowHisMeetingDetailRequest): Promise<ShowHisMeetingDetailResponse> {
        const options = ParamCreater().showHisMeetingDetail(showHisMeetingDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询当前会议已保存的多画面布局。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询多画面布局
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLayout(showLayoutRequest?: ShowLayoutRequest): Promise<ShowLayoutResponse> {
        const options = ParamCreater().showLayout(showLayoutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询偏移量
     * * 管理员可以查询管理权限域内所有会议的详情，普通用户仅能查询自己创建或者需要参加的会议详情。
     * * 只能查询尚未结束的会议（既正在召开的会议和已预约还未召开的会议）。如果需要查询历史会议列详情，请参考[[查询历史会议详情](https://support.huaweicloud.com/api-meeting/meeting_21_0052.html)](tag:hws)[[查询历史会议详情](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0052.html)](tag:hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询会议详情
     * @param {string} conferenceID 会议ID。 &gt; 创建会议时返回的conferenceID。不是vmrConferenceID。 
     * @param {number} [offset] 查询偏移量。默认为0。针对PageParticipant 中的与会者分页。
     * @param {number} [limit] 查询数量。默认值20。
     * @param {string} [searchKey] 查询条件。长度限制为1-128个字符。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xType] 默认值为0。 - 0: 不区分终端和与会人 - 1: 分页查询区分终端和与会人，结果合并返回 - 2: 单独查询终端和与会人，结果单独返回
     * @param {string} [xQueryType] 当X-Type为2时，有效。默认为0。 - 0: 查询与会人 - 1: 查询终端
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMeetingDetail(showMeetingDetailRequest?: ShowMeetingDetailRequest): Promise<ShowMeetingDetailResponse> {
        const options = ParamCreater().showMeetingDetail(showMeetingDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户查询单个会议纪要详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询会议纪要详情
     * @param {string} fileCode 会议纪要文件码。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMeetingFile(showMeetingFileRequest?: ShowMeetingFileRequest): Promise<ShowMeetingFileResponse> {
        const options = ParamCreater().showMeetingFile(showMeetingFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户使用手机扫码后，手机端请求服务端,让服务端通知指定IdeaHub打开指定用户的会议纪要文件列表。二维码内容 ：cloudlink://cloudlink.huawei.com/h5page?action&#x3D;OPEN_MEETING_FILE_LIST&amp;key1&#x3D;value1&amp;key2&#x3D;value2 。key/value的个数可能变化，终端解析后，在发起后续请求时，将所有key/value存为map，作为入参即可。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 打开会议纪要文件列表
     * @param {{ [key: string]: string; }} info 二维码内容中所有key/value存为的map集合。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMeetingFileList(showMeetingFileListRequest?: ShowMeetingFileListRequest): Promise<ShowMeetingFileListResponse> {
        const options = ParamCreater().showMeetingFileList(showMeetingFileListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业用户通过该接口查询自己的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用户查询自己的信息
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMyInfo(showMyInfoRequest?: ShowMyInfoRequest): Promise<ShowMyInfoResponse> {
        const options = ParamCreater().showMyInfo(showMyInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询正在召开的会议详情。管理员可以查询本企业内所有的在线会议详情，普通用户仅能查询自己帐号创建或者需要参加的在线会议详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询在线会议详情
     * @param {string} conferenceID 会议ID。 &gt; 会议ID。创建会议时返回的conferenceID。不是vmrConferenceID。 
     * @param {number} [offset] 查询偏移量。默认为0。针对PageParticipant中的与会者分页。
     * @param {number} [limit] 查询数量。默认值20。
     * @param {string} [searchKey] 查询条件。长度限制为1-128个字符。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xType] 默认值为0。 - 0: 不区分终端和与会人 - 1: 分页查询区分终端和与会人，结果合并返回 - 2: 单独查询终端和与会人，结果单独返回
     * @param {string} [xQueryType] 当X-Type为2时，该字段有效。默认值为0。 - 0: 查询与会人 - 1: 查询终端
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOnlineMeetingDetail(showOnlineMeetingDetailRequest?: ShowOnlineMeetingDetailRequest): Promise<ShowOnlineMeetingDetailResponse> {
        const options = ParamCreater().showOnlineMeetingDetail(showOnlineMeetingDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员查询所属企业的资源使用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员查询企业资源使用信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrgRes(showOrgResRequest?: ShowOrgResRequest): Promise<ShowOrgResResponse> {
        const options = ParamCreater().showOrgRes();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID获取节目详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据ID查询节目详情
     * @param {string} id 节目ID。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProgram(showProgramRequest?: ShowProgramRequest): Promise<ShowProgramResponse> {
        const options = ParamCreater().showProgram(showProgramRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID获取发布详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据ID查询信息窗发布详情
     * @param {string} id 发布ID。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublication(showPublicationRequest?: ShowPublicationRequest): Promise<ShowPublicationResponse> {
        const options = ParamCreater().showPublication(showPublicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询正在召开的会议实时信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询会议实时信息
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRealTimeInfoOfMeeting(showRealTimeInfoOfMeetingRequest?: ShowRealTimeInfoOfMeetingRequest): Promise<ShowRealTimeInfoOfMeetingResponse> {
        const options = ParamCreater().showRealTimeInfoOfMeeting(showRealTimeInfoOfMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 改接口用于查询某个会议录制的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制详情
     * @param {string} confUUID 会议UUID(通过[[查询录制列表](https://support.huaweicloud.com/api-meeting/meeting_21_0048.html)](tag:hws)[[查询录制列表](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0048.html)](tag:hk)获取)。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordingDetail(showRecordingDetailRequest?: ShowRecordingDetailRequest): Promise<ShowRecordingDetailResponse> {
        const options = ParamCreater().showRecordingDetail(showRecordingDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用户查询指定会议录制文件下载链接。
     * &gt; * 仅企业管理员权限的帐号才能查询录制文件的下载链接
     * &gt; * 这个接口需要在华为云会议后台开通白名单后才能调用。请联系华为销售人员，并提供华为云会议企业ID
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制文件下载链接
     * @param {string} confUUID 会议UUID(通过[[查询录制列表](https://support.huaweicloud.com/api-meeting/meeting_21_0048.html)](tag:hws)[[查询录制列表](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0048.html)](tag:hk)获取)。
     * @param {number} [offset] 查询偏移量。默认为0。
     * @param {number} [limit] 查询数量。默认是20，最大500条。
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordingFileDownloadUrls(showRecordingFileDownloadUrlsRequest?: ShowRecordingFileDownloadUrlsRequest): Promise<ShowRecordingFileDownloadUrlsResponse> {
        const options = ParamCreater().showRecordingFileDownloadUrls(showRecordingFileDownloadUrlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询会议所在区域的IP和域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询会议所在区域信息
     * @param {string} conferenceID 会议ID。 &gt; 创建会议时返回的conferenceID。不是vmrConferenceID。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRegionInfoOfMeeting(showRegionInfoOfMeetingRequest?: ShowRegionInfoOfMeetingRequest): Promise<ShowRegionInfoOfMeetingResponse> {
        const options = ParamCreater().showRegionInfoOfMeeting(showRegionInfoOfMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定网络研讨会的高级设置。管理员可查询企业内的网络研讨会高级设置，非管理员只可查询自己预定的网络研讨会的高级设置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络研讨会高级设置
     * @param {string} conferenceId 网络研讨会ID
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRoomSetting(showRoomSettingRequest?: ShowRoomSettingRequest): Promise<ShowRoomSettingResponse> {
        const options = ParamCreater().showRoomSetting(showRoomSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SP管理员查询所属SP的共享资源使用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员查询SP下资源使用信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSpRes(showSpResRequest?: ShowSpResRequest): Promise<ShowSpResResponse> {
        const options = ParamCreater().showSpRes();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SP管理员查询SP的所有资源，包括已使用的资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员查询资源信息
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {boolean} [queryGroup] 是否在查询资源信息时返回SP自主规划的媒体接入分组id，默认不查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSpResource(showSpResourceRequest?: ShowSpResourceRequest): Promise<ShowSpResourceResponse> {
        const options = ParamCreater().showSpResource(showSpResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询SSO登录的鉴权配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SSO登录配置
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSsoConfig(showSsoConfigRequest?: ShowSsoConfigRequest): Promise<ShowSsoConfigResponse> {
        const options = ParamCreater().showSsoConfig(showSsoConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口查询企业用户详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户详情
     * @param {string} account 帐号。 * 如果是帐号/密码鉴权方式，是指华为云会议帐号 * 如果是App ID鉴权方式，是指第三方User ID 
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：华为云会议帐号。用于帐号/密码鉴权方式 * 1：第三方User ID，用于App ID鉴权方式 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserDetail(showUserDetailRequest?: ShowUserDetailRequest): Promise<ShowUserDetailResponse> {
        const options = ParamCreater().showUserDetail(showUserDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于管理员查询企业事件订阅配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件推送
     * @param {string} [corpId] 企业ID。按企业注册回调时需要填写。
     * @param {string} [spId] SP ID。多租户场景下，按SP注册回调时需要填写。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWebHookConfig(showWebHookConfigRequest?: ShowWebHookConfigRequest): Promise<ShowWebHookConfigResponse> {
        const options = ParamCreater().showWebHookConfig(showWebHookConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定网络研讨会的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络研讨会详情
     * @param {string} conferenceId 网络研讨会ID。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWebinar(showWebinarRequest?: ShowWebinarRequest): Promise<ShowWebinarResponse> {
        const options = ParamCreater().showWebinar(showWebinarRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于通过会议ID和会议密码激活会议。所有的会控接口都需要在会议激活后才能调用，可以通过该接口先激活会议。
     * &gt; 来宾密码是否可以激活会议取决于会议创建时是否设置了“是否允许来宾启动会议”（allowGuestStartConf&#x3D;true）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 激活会议
     * @param {StartRequest} startRequest 激活会议请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startMeeting(startMeetingRequest?: StartMeetingRequest): Promise<StartMeetingResponse> {
        const options = ParamCreater().startMeeting(startMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于结束正在召开的会议。
     * &gt; * 如果管理员在企业的会议设置中关闭“结束会议保留预约记录”开关，会议结束后会议列表中将删除该会议，与会者不能再次加入该会议。否则会议预约时间到之前，与会者可以再次加入该会议
     * &gt; * “结束会议保留预约记录”默认是开的
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 结束会议
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopMeeting(stopMeetingRequest?: StopMeetingRequest): Promise<StopMeetingResponse> {
        const options = ParamCreater().stopMeeting(stopMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于切换会中视频画面显示策略，包括广播多画面，广播单画面，声控多画面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换视频显示策略
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {RestSwitchModeReqBody} reqBody 切换会议显示策略请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchMode(switchModeRequest?: SwitchModeRequest): Promise<SwitchModeResponse> {
        const options = ParamCreater().switchMode(switchModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业用户通过该接口修改手机或邮箱，需要先获取验证码，验证多次失败会禁止修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改手机或邮箱
     * @param {VerificationCodeDTO} verificationCodeDTO 携带修改后的手机、邮箱以及获取的验证码。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateContact(updateContactRequest?: UpdateContactRequest): Promise<UpdateContactResponse> {
        const options = ParamCreater().updateContact(updateContactRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改企业，若任一参数为null或者不携带则不修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员修改企业
     * @param {string} id 企业id。
     * @param {ModCorpDTO} corpDTO 修改企业请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCorp(updateCorpRequest?: UpdateCorpRequest): Promise<UpdateCorpResponse> {
        const options = ParamCreater().updateCorp(updateCorpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口修改企业注册信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 企业管理员修改企业注册信息
     * @param {ModCorpBasicInfoDTO} modDTO 修改企业注册信息
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCorpBasicInfo(updateCorpBasicInfoRequest?: UpdateCorpBasicInfoRequest): Promise<UpdateCorpBasicInfoResponse> {
        const options = ParamCreater().updateCorpBasicInfo(updateCorpBasicInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口修改部门。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改部门
     * @param {string} deptCode 部门编码。 长度： 0-32位。
     * @param {ModDeptDTO} deptDTO 修改部门请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDepartment(updateDepartmentRequest?: UpdateDepartmentRequest): Promise<UpdateDepartmentResponse> {
        const options = ParamCreater().updateDepartment(updateDepartmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口修改专业会议终端。
     * &gt; 如果需要修改Ideahub、SmartRooms、智慧屏TV请使用[[修改用户](https://support.huaweicloud.com/api-meeting/meeting_21_0068.html)](tag:hws)[[修改用户](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0068.html)](tag:hk)接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改终端
     * @param {string} sn 终端SN号，仅可包含数字、字母和下划线。
     * @param {ModDeviceDTO} deviceDTO 修改终端请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDevice(updateDeviceRequest?: UpdateDeviceRequest): Promise<UpdateDeviceResponse> {
        const options = ParamCreater().updateDevice(updateDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新信息窗素材。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新信息窗素材
     * @param {string} id 素材ID。
     * @param {UpdateMaterialRequestDTO} updateMaterialRequestDTO 信息窗素材信息。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMaterial(updateMaterialRequest?: UpdateMaterialRequest): Promise<UpdateMaterialResponse> {
        const options = ParamCreater().updateMaterial(updateMaterialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改已预约的会议。会议开始后，不能被修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑预约会议
     * @param {string} conferenceID 会议ID。 &gt; 创建会议时返回的conferenceID。不是vmrConferenceID。 
     * @param {RestScheduleConfDTO} reqBody 会议信息。
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMeeting(updateMeetingRequest?: UpdateMeetingRequest): Promise<UpdateMeetingResponse> {
        const options = ParamCreater().updateMeeting(updateMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业用户登录后可以修改分配给用户的云会议室及个人会议ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用会议室及个人会议ID信息
     * @param {string} id 云会议室ID。
     * @param {ModVmrDTO} modDTO 修改VMR请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMemberVmr(updateMemberVmrRequest?: UpdateMemberVmrRequest): Promise<UpdateMemberVmrResponse> {
        const options = ParamCreater().updateMemberVmr(updateMemberVmrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业用户通过该接口修改自己的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用户修改自己的信息
     * @param {ModMemberDTO} memberDTO 修改用户信息。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMyInfo(updateMyInfoRequest?: UpdateMyInfoRequest): Promise<UpdateMyInfoResponse> {
        const options = ParamCreater().updateMyInfo(updateMyInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新信息窗节目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新信息窗节目
     * @param {string} id 节目ID。
     * @param {UpdateProgramRequestDTO} programDTO 节目信息。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProgram(updateProgramRequest?: UpdateProgramRequest): Promise<UpdateProgramResponse> {
        const options = ParamCreater().updateProgram(updateProgramRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改信息窗发布。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改信息窗发布
     * @param {string} id 发布ID。
     * @param {UpdatePublicationRequestDTO} publicationDTO 更新发布信息请求
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublication(updatePublicationRequest?: UpdatePublicationRequest): Promise<UpdatePublicationResponse> {
        const options = ParamCreater().updatePublication(updatePublicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业成员通过该接口提供用户修改密码功能，服务器收到请求，修改用户密码并返回结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改密码
     * @param {ModPwdReqDTO} modPwdReqDTO 修改密码信息。
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePwd(updatePwdRequest?: UpdatePwdRequest): Promise<UpdatePwdResponse> {
        const options = ParamCreater().updatePwd(updatePwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改已预约的周期性会议。会议开始后，不能被修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑周期性会议
     * @param {string} conferenceID 会议ID。
     * @param {RestScheduleConfDTO} reqBody 编辑周期会议请求体。
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecurringMeeting(updateRecurringMeetingRequest?: UpdateRecurringMeetingRequest): Promise<UpdateRecurringMeetingResponse> {
        const options = ParamCreater().updateRecurringMeeting(updateRecurringMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改已预约的周期性会议的子会议。会议开始后，不能被修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑周期性会议的子会议
     * @param {string} conferenceID 会议ID。
     * @param {RestScheduleCycleConfDTO} reqBody 编辑周期会议子会议请求。
     * @param {string} [xAuthorizationType] 标识是否为第三方portal过来的请求。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [userUUID] 用户的UUID。 &gt; 该参数将废弃，请勿使用。 
     * @param {string} [xSiteId] 用于区分到哪个HCSO站点鉴权。 &gt; 该参数将废弃，请勿使用。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecurringSubMeeting(updateRecurringSubMeetingRequest?: UpdateRecurringSubMeetingRequest): Promise<UpdateRecurringSubMeetingResponse> {
        const options = ParamCreater().updateRecurringSubMeeting(updateRecurringSubMeetingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业修改资源的过期时间、停用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SP管理员根据修改企业资源
     * @param {string} corpId 企业id。
     * @param {Array<ModResourceDTO>} resourceList 待修改的资源列表，最多支持批量处理100个。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResource(updateResourceRequest?: UpdateResourceRequest): Promise<UpdateResourceResponse> {
        const options = ParamCreater().updateResource(updateResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置指定网络研讨会的高级设置。管理员可设置企业内的网络研讨会高级设置，非管理员只可设置自己预定的网络研讨会的高级设置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改网络研讨会高级设置
     * @param {string} conferenceId 网络研讨会ID。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {OpenRoomSettingReq} [openRoomSettingReq] 网络研讨会高级设置请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRoomSetting(updateRoomSettingRequest?: UpdateRoomSettingRequest): Promise<UpdateRoomSettingResponse> {
        const options = ParamCreater().updateRoomSetting(updateRoomSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改会议配置，包括会议共享是否锁定，允许呼入范围。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 会中修改配置
     * @param {string} conferenceID 会议ID。
     * @param {string} xConferenceAuthorization 会控Token，通过[[获取会控token](https://support.huaweicloud.com/api-meeting/meeting_21_0027.html)](tag:hws)[[获取会控token](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0027.html)](tag:hk)接口获得。
     * @param {UpdateStartedConfigReqBody} updateStartedConfigReqBody 修改会议配置请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStartedConfConfig(updateStartedConfConfigRequest?: UpdateStartedConfConfigRequest): Promise<UpdateStartedConfConfigResponse> {
        const options = ParamCreater().updateStartedConfConfig(updateStartedConfConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口提供刷新Token功能，根据传入的Token，刷新Token失效时间并返回结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 刷新Token
     * @param {string} [xRequestID] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateToken(updateTokenRequest?: UpdateTokenRequest): Promise<UpdateTokenResponse> {
        const options = ParamCreater().updateToken(updateTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 企业管理员通过该接口修改企业用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户
     * @param {string} account 帐号。 * 如果是帐号/密码鉴权方式，是指华为云会议帐号 * 如果是App ID鉴权方式，是指第三方User ID 
     * @param {ModUserDTO} userDTO 修改用户请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {number} [accountType] 帐号类型。默认0。 * 0：华为云会议帐号。用于帐号/密码鉴权方式 * 1：第三方User ID，用于App ID鉴权方式 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUser(updateUserRequest?: UpdateUserRequest): Promise<UpdateUserResponse> {
        const options = ParamCreater().updateUser(updateUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于管理员变更订阅配置使用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启事件推送
     * @param {string} id 订阅配置记录ID。
     * @param {number} status 事件推送状态。 * 0：启用 * 1：禁用 * 2：锁定 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWebHookConfigStatus(updateWebHookConfigStatusRequest?: UpdateWebHookConfigStatusRequest): Promise<UpdateWebHookConfigStatusResponse> {
        const options = ParamCreater().updateWebHookConfigStatus(updateWebHookConfigStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改已创建的网络研讨会。网络研讨会开始后不能修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑网络研讨会
     * @param {OpenEditConfReq} editWebinarRequestBody 编辑网络研讨会请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWebinar(updateWebinarRequest?: UpdateWebinarRequest): Promise<UpdateWebinarResponse> {
        const options = ParamCreater().updateWebinar(updateWebinarRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用户上传网络研讨会高级设置用的图片。图片可用于网络研讨会的封面和Logo。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传图片
     * @param {any} file 需要上传的图片文件。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用UUID，若不携带，则后台自动生成。
     * @param {string} [acceptLanguage] 语言参数，默认为中文zh-CN，英文为en-US。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadFile(uploadFileRequest?: UploadFileRequest): Promise<UploadFileResponse> {
        const options = ParamCreater().uploadFile(uploadFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询企业内历史会议的QoS告警。仅旗舰版企业/标准版企业的企业管理员有权限查询。可以查询最近3个月内的数据。
     * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询QoS历史会议列表
     * @param {number} startDate 查询的起始日期，Unix时间戳（单位毫秒）。
     * @param {number} endDate 查询的截止日期，Unix时间戳（单位毫秒）。
     * @param {number} [offset] 查询偏移量。 * 取值：大于等于0，默认值为0 * 大于等于最大条目数量，则返回最后一页的数据
     * @param {number} [limit] 查询的条目数量。 * 取值：1-500，默认值为20
     * @param {string} [searchKey] 查询条件。会议主题、会议预约人和会议ID等可作为搜索内容。长度限制为1-512个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchQosHistoryMeetings(searchQosHistoryMeetingsRequest?: SearchQosHistoryMeetingsRequest): Promise<SearchQosHistoryMeetingsResponse> {
        const options = ParamCreater().searchQosHistoryMeetings(searchQosHistoryMeetingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询企业内正在召开会议的QoS告警。仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询QoS在线会议列表
     * @param {number} [offset] 查询偏移量。 * 取值：大于等于0，默认值为0 * 大于等于最大条目数量，则返回最后一页的数据
     * @param {number} [limit] 查询的条目数量。 * 取值：1-500，默认值为20
     * @param {string} [searchKey] 查询条件。会议主题、会议预约人和会议ID等可作为搜索内容。长度限制为1-512个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchQosOnlineMeetings(searchQosOnlineMeetingsRequest?: SearchQosOnlineMeetingsRequest): Promise<SearchQosOnlineMeetingsResponse> {
        const options = ParamCreater().searchQosOnlineMeetings(searchQosOnlineMeetingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询企业内在线会议或历史会议的与会者QoS数据。仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询与会者的QoS数据
     * @param {string} confUUID 会议UUID。
     * @param {'online' | 'history'} confType 会议类别。 * online：在线会议，在召开的会议 * history：历史会议，已召开的会议
     * @param {string} participantID 与会者标识。
     * @param {'audio' | 'video' | 'screen' | 'cpu'} qosType Qos类型。 - audio：音频 - video：视频 - screen：屏幕共享 - cpu：cpu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchQosParticipantDetail(searchQosParticipantDetailRequest?: SearchQosParticipantDetailRequest): Promise<SearchQosParticipantDetailResponse> {
        const options = ParamCreater().searchQosParticipantDetail(searchQosParticipantDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询企业内在线会议或历史会议的与会者QoS告警。仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询QoS会议与会者列表
     * @param {string} confUUID 会议UUID。
     * @param {'online' | 'history'} confType 会议类别。 * online：在线会议，正在召开的会议 * history：历史会议，已结束的会议
     * @param {number} [offset] 查询偏移量。 * 取值：大于等于0，默认值为0。 * 大于等于最大条目数量，则返回最后一页的数据。
     * @param {number} [limit] 查询的条目数量。 * 取值：1-500，默认值为20。
     * @param {string} [searchKey] 查询条件。与会者名称可作为搜索内容。长度限制为1-512个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchQosParticipants(searchQosParticipantsRequest?: SearchQosParticipantsRequest): Promise<SearchQosParticipantsResponse> {
        const options = ParamCreater().searchQosParticipants(searchQosParticipantsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置QoS告警阈值。仅旗舰版企业/标准版企业的企业管理员有权限设置。
     * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置QoS告警阈值
     * @param {'AUDIO' | 'VIDEO' | 'SCREEN' | 'CPU'} thresholdType 阈值类型： * AUDIO：音频相关阈值 * VIDEO：视频相关阈值 * SCREEN：屏幕共享相关阈值 * CPU：CPU相关阈值
     * @param {SetQosThresholdReq} setQosThresholdReq 企业租户指定类型的阈值设定值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setQosThreshold(setQosThresholdRequest?: SetQosThresholdRequest): Promise<SetQosThresholdResponse> {
        const options = ParamCreater().setQosThreshold(setQosThresholdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询QoS告警阈值。仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * &gt; 该接口用于查询QoS告警阈值。仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询QoS告警阈值
     * @param {'AUDIO' | 'VIDEO' | 'SCREEN' | 'CPU'} thresholdType 阈值类型。 * AUDIO：音频告警阈值 * VIDEO：视频告警阈值 * SCREEN：屏幕共享告警阈值 * CPU：CPU告警阈值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQosThreshold(showQosThresholdRequest?: ShowQosThresholdRequest): Promise<ShowQosThresholdResponse> {
        const options = ParamCreater().showQosThreshold(showQosThresholdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询企业内：
     * * 单日内按小时统计的会议数据。
     * * 指定日期范围内按日/按月统计的会议数据。
     * &gt; 仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业级会议总体统计数据
     * @param {'D' | 'M'} timeUnit 查询时间维度，取值： * D: 按日查询 * M: 按月查询
     * @param {string} startTime 查询时间范围的开始时间，格式根据timeUnit的取值而定。 * timeUnit &#x3D; D，格式：yyyy-MM-dd，此情况下startTime与endTime间隔最多31日 * timeUnit &#x3D; M，格式：yyyy-MM，此情况下startTime与endTime间隔最多12个月
     * @param {string} endTime 查询时间范围的结束时间，格式根据timeUnit的取值而定。 * timeUnit &#x3D; D，格式：yyyy-MM-dd，此情况下startTime与endTime间隔最多31日 * timeUnit &#x3D; M，格式：yyyy-MM，此情况下startTime与endTime间隔最多12个月
     * @param {'conference_info' | 'conference_hourly_info'} category 查询分类，取值： * conference_info: 会议总体数据 * conference_hourly_info: 单日内会议总体数据 * category &#x3D; conference_hourly_info的情况，timeUnit只能取值\&#39;D\&#39;，且startTime与endTime必须为同一天
     * @param {number} [offset] 查询偏移量。 * 取值：大于等于0，默认值为0 * 大于等于最大条目数量，则返回最后一页数据，页数根据总条目数和limit计算得出
     * @param {number} [limit] 查询的条目数量。 * 取值：1-500，默认值为20
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchStatisticConferenceInfo(searchStatisticConferenceInfoRequest?: SearchStatisticConferenceInfoRequest): Promise<SearchStatisticConferenceInfoResponse> {
        const options = ParamCreater().searchStatisticConferenceInfo(searchStatisticConferenceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询企业内与会者数据统计：
     * * 查询与会用户统计数据，按日/按月统计。
     * * 查询与会硬件终端统计数据，按日/按月统计。
     * * 查询与会设备统计数据，按日/按月统计。
     * &gt; 仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业级会议与会统计数据
     * @param {'D' | 'M'} timeUnit 查询时间维度，取值： * D: 按日查询 * M: 按月查询
     * @param {string} startTime 查询时间范围的开始时间，格式根据timeUnit的取值而定。 * timeUnit &#x3D; D，格式：yyyy-MM-dd，此情况下startTime与endTime间隔最多31日 * timeUnit &#x3D; M，格式：yyyy-MM，此情况下startTime与endTime间隔最多12个月
     * @param {string} endTime 查询时间范围的结束时间，格式根据timeUnit的取值而定。 * timeUnit &#x3D; D，格式：yyyy-MM-dd，此情况下startTime与endTime间隔最多31日 * timeUnit &#x3D; M，格式：yyyy-MM，此情况下startTime与endTime间隔最多12个月
     * @param {'user_participate_info' | 'hard_terminal_participate_info' | 'participant_type_info'} category 查询分类，取值： * user_participate_info: 用户与会统计数据 * hard_terminal_participate_info: 硬件终端与会统计数据 * participant_type_info: 与会设备统计数据
     * @param {number} [offset] 查询偏移量。 * 取值：大于等于0，默认值为0 * 大于等于最大条目数量，则返回最后一页数据，页数根据总条目数和limit计算得出
     * @param {number} [limit] 查询的条目数量。 * 取值：1-500，默认值为20
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchStatisticConferenceParticipant(searchStatisticConferenceParticipantRequest?: SearchStatisticConferenceParticipantRequest): Promise<SearchStatisticConferenceParticipantResponse> {
        const options = ParamCreater().searchStatisticConferenceParticipant(searchStatisticConferenceParticipantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询企业内已购资源使用状况数据统计：
     * * 查询已购资源使用状况，按日/按月统计。
     * &gt; 仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业级会议已购资源使用统计数据
     * @param {'D' | 'M'} timeUnit 查询时间维度，取值： * D: 按日查询 * M: 按月查询
     * @param {string} startTime 查询时间范围的开始时间，格式根据timeUnit的取值而定。 * timeUnit &#x3D; D，格式：yyyy-MM-dd，此情况下startTime与endTime间隔最多31日 * timeUnit &#x3D; M，格式：yyyy-MM，此情况下startTime与endTime间隔最多12个月
     * @param {string} endTime 查询时间范围的结束时间，格式根据timeUnit的取值而定。 * timeUnit &#x3D; D，格式：yyyy-MM-dd，此情况下startTime与endTime间隔最多31日 * timeUnit &#x3D; M，格式：yyyy-MM，此情况下startTime与endTime间隔最多12个月
     * @param {'used_vmr_info' | 'used_live_info' | 'used_record_info' | 'used_pstn_info'} category 查询分类，取值： * used_vmr_info: 已购VMR资源使用统计数据 * used_live_info: 已购直播端口资源使用统计数据 * used_record_info: 已购录播资源使用统计数据 * used_pstn_info: 已购电话外呼资源使用统计数据
     * @param {number} [offset] 查询偏移量。 * 取值：大于等于0，默认值为0 * 大于等于最大条目数量，则返回最后一页数据，页数根据总条目数和limit计算得出
     * @param {number} [limit] 查询的条目数量。 * 取值：1-500，默认值为20
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchStatisticResourceInfo(searchStatisticResourceInfoRequest?: SearchStatisticResourceInfoRequest): Promise<SearchStatisticResourceInfoResponse> {
        const options = ParamCreater().searchStatisticResourceInfo(searchStatisticResourceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询企业内用户数据统计：
     * * 查询会议用户登录数据，按日/按月统计。
     * * 查询会议用户激活数据，按日/按月统计。
     * * 查询会议用户登录设备数据，按日/按月统计。
     * &gt; 仅旗舰版企业/标准版企业的企业管理员有权限查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业级会议的用户统计数据
     * @param {'D' | 'M'} timeUnit 查询时间维度，取值： * D: 按日查询 * M: 按月查询
     * @param {string} startTime 查询时间范围的开始时间，格式根据timeUnit的取值而定。 * timeUnit &#x3D; D，格式：yyyy-MM-dd，此情况下startTime与endTime间隔最多31日 * timeUnit &#x3D; M，格式：yyyy-MM，此情况下startTime与endTime间隔最多12个月
     * @param {string} endTime 查询时间范围的结束时间，格式根据timeUnit的取值而定。 * timeUnit &#x3D; D，格式：yyyy-MM-dd，此情况下startTime与endTime间隔最多31日 * timeUnit &#x3D; M，格式：yyyy-MM，此情况下startTime与endTime间隔最多12个月
     * @param {'user_login_info' | 'user_activate_info' | 'user_login_device_info'} category 查询分类，取值： * user_login_info: 用户登录数据 * user_activate_info: 用户激活数据 * user_login_device_info: 用户登录设备数据
     * @param {number} [offset] 查询偏移量。 * 取值：大于等于0，默认值为0 * 大于等于最大条目数量，则返回最后一页数据，页数根据总条目数和limit计算得出
     * @param {number} [limit] 查询的条目数量。 * 取值：1-500，默认值为20
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchStatisticUserInfo(searchStatisticUserInfoRequest?: SearchStatisticUserInfoRequest): Promise<SearchStatisticUserInfoResponse> {
        const options = ParamCreater().searchStatisticUserInfo(searchStatisticUserInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建企业，默认管理员及分配资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addCorp(addCorpRequest?: AddCorpRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/sp/corp",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (addCorpRequest !== null && addCorpRequest !== undefined) {
                if (addCorpRequest instanceof AddCorpRequest) {
                    body = addCorpRequest.body
                    xRequestId = addCorpRequest.xRequestId;
                    acceptLanguage = addCorpRequest.acceptLanguage;
                } else {
                    body = addCorpRequest['body'];
                    xRequestId = addCorpRequest['X-Request-Id'];
                    acceptLanguage = addCorpRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业默认管理员添加企业普通管理员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addCorpAdmin(addCorpAdminRequest?: AddCorpAdminRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/admin",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (addCorpAdminRequest !== null && addCorpAdminRequest !== undefined) {
                if (addCorpAdminRequest instanceof AddCorpAdminRequest) {
                    body = addCorpAdminRequest.body
                    xRequestId = addCorpAdminRequest.xRequestId;
                    acceptLanguage = addCorpAdminRequest.acceptLanguage;
                    accountType = addCorpAdminRequest.accountType;
                } else {
                    body = addCorpAdminRequest['body'];
                    xRequestId = addCorpAdminRequest['X-Request-Id'];
                    acceptLanguage = addCorpAdminRequest['Accept-Language'];
                    accountType = addCorpAdminRequest['accountType'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口添加部门，最多支持10级部门，每级子部门最多支持100个，默认企业最大部门数量为10000个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDepartment(addDepartmentRequest?: AddDepartmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/dept",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (addDepartmentRequest !== null && addDepartmentRequest !== undefined) {
                if (addDepartmentRequest instanceof AddDepartmentRequest) {
                    body = addDepartmentRequest.body
                    xRequestId = addDepartmentRequest.xRequestId;
                    acceptLanguage = addDepartmentRequest.acceptLanguage;
                } else {
                    body = addDepartmentRequest['body'];
                    xRequestId = addDepartmentRequest['X-Request-Id'];
                    acceptLanguage = addDepartmentRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口添加专业会议终端。专业会议终端包括DP300/HUAWEI Bar系列/HUAWEI Board/TE系列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDevice(addDeviceRequest?: AddDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/device",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (addDeviceRequest !== null && addDeviceRequest !== undefined) {
                if (addDeviceRequest instanceof AddDeviceRequest) {
                    body = addDeviceRequest.body
                    xRequestId = addDeviceRequest.xRequestId;
                    acceptLanguage = addDeviceRequest.acceptLanguage;
                } else {
                    body = addDeviceRequest['body'];
                    xRequestId = addDeviceRequest['X-Request-Id'];
                    acceptLanguage = addDeviceRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增信息窗素材（上传素材文件）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addMaterial(addMaterialRequest?: AddMaterialRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/sss/materials",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            
            
            let xRequestId;
            
            let acceptLanguage;

            if (addMaterialRequest !== null && addMaterialRequest !== undefined) {
                if (addMaterialRequest instanceof AddMaterialRequest) {
                    file = addMaterialRequest.body?.file;
                    xRequestId = addMaterialRequest.xRequestId;
                    acceptLanguage = addMaterialRequest.acceptLanguage;
                } else {
                    file = addMaterialRequest['body']['file'];
                    xRequestId = addMaterialRequest['X-Request-Id'];
                    acceptLanguage = addMaterialRequest['Accept-Language'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling addMaterial.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增信息窗节目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addProgram(addProgramRequest?: AddProgramRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/sss/programs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (addProgramRequest !== null && addProgramRequest !== undefined) {
                if (addProgramRequest instanceof AddProgramRequest) {
                    body = addProgramRequest.body
                    xRequestId = addProgramRequest.xRequestId;
                    acceptLanguage = addProgramRequest.acceptLanguage;
                } else {
                    body = addProgramRequest['body'];
                    xRequestId = addProgramRequest['X-Request-Id'];
                    acceptLanguage = addProgramRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增信息窗发布。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addPublication(addPublicationRequest?: AddPublicationRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/sss/publications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (addPublicationRequest !== null && addPublicationRequest !== undefined) {
                if (addPublicationRequest instanceof AddPublicationRequest) {
                    body = addPublicationRequest.body
                    xRequestId = addPublicationRequest.xRequestId;
                    acceptLanguage = addPublicationRequest.acceptLanguage;
                } else {
                    body = addPublicationRequest['body'];
                    xRequestId = addPublicationRequest['X-Request-Id'];
                    acceptLanguage = addPublicationRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业新增资源发放。该接口同时支持修改，带resourceId后会判断该资源是否存在，存在即修改（支持修改的参数见修改接口），否则按新增处理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addResource(addResourceRequest?: AddResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/sp/corp/{corp_id}/resource",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let corpId;
            
            let xRequestId;
            
            let acceptLanguage;

            if (addResourceRequest !== null && addResourceRequest !== undefined) {
                if (addResourceRequest instanceof AddResourceRequest) {
                    corpId = addResourceRequest.corpId;
                    body = addResourceRequest.body
                    xRequestId = addResourceRequest.xRequestId;
                    acceptLanguage = addResourceRequest.acceptLanguage;
                } else {
                    corpId = addResourceRequest['corp_id'];
                    body = addResourceRequest['body'];
                    xRequestId = addResourceRequest['X-Request-Id'];
                    acceptLanguage = addResourceRequest['Accept-Language'];
                }
            }

        
            if (corpId === null || corpId === undefined) {
            throw new RequiredError('corpId','Required parameter corpId was null or undefined when calling addResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'corp_id': corpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户使用手机扫码后,手机端请求服务端将当前会议纪要文件保存到个人云空间。二维码内容 ：cloudlink://cloudlink.huawei.com/h5page?action&#x3D;SAVE_MEETING_FILE&amp;key1&#x3D;value1&amp;key2&#x3D;value2 。key/value的个数可能变化，终端解析后，在发起后续请求时，将所有key/value存为map，作为入参即可。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addToPersonalSpace(addToPersonalSpaceRequest?: AddToPersonalSpaceRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/sss/meeting-files/save-to-personal-space",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (addToPersonalSpaceRequest !== null && addToPersonalSpaceRequest !== undefined) {
                if (addToPersonalSpaceRequest instanceof AddToPersonalSpaceRequest) {
                    body = addToPersonalSpaceRequest.body
                    xRequestId = addToPersonalSpaceRequest.xRequestId;
                    acceptLanguage = addToPersonalSpaceRequest.acceptLanguage;
                } else {
                    body = addToPersonalSpaceRequest['body'];
                    xRequestId = addToPersonalSpaceRequest['X-Request-Id'];
                    acceptLanguage = addToPersonalSpaceRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口添加企业用户。
         * &gt; 默认添加用户后，用户第一次登录华为云会议App或者Portal时需要修改密码。若需关闭第一次登录修改密码，请联系华为销售人员，并提供华为云会议企业ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addUser(addUserRequest?: AddUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/member",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (addUserRequest !== null && addUserRequest !== undefined) {
                if (addUserRequest instanceof AddUserRequest) {
                    body = addUserRequest.body
                    xRequestId = addUserRequest.xRequestId;
                    acceptLanguage = addUserRequest.acceptLanguage;
                } else {
                    body = addUserRequest['body'];
                    xRequestId = addUserRequest['X-Request-Id'];
                    acceptLanguage = addUserRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置允许/禁止与会者客户端本地录制（非云端录制）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowClientRecord(allowClientRecordRequest?: AllowClientRecordRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/allowClientRecord",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;
            
            let participantID;

            if (allowClientRecordRequest !== null && allowClientRecordRequest !== undefined) {
                if (allowClientRecordRequest instanceof AllowClientRecordRequest) {
                    conferenceID = allowClientRecordRequest.conferenceID;
                    xConferenceAuthorization = allowClientRecordRequest.xConferenceAuthorization;
                    participantID = allowClientRecordRequest.participantID;
                    body = allowClientRecordRequest.body
                } else {
                    conferenceID = allowClientRecordRequest['conferenceID'];
                    xConferenceAuthorization = allowClientRecordRequest['X-Conference-Authorization'];
                    participantID = allowClientRecordRequest['participantID'];
                    body = allowClientRecordRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling allowClientRecord.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling allowClientRecord.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置与会者是否可以自己解除静音。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowGuestUnmute(allowGuestUnmuteRequest?: AllowGuestUnmuteRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/mute/guestUnMute",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (allowGuestUnmuteRequest !== null && allowGuestUnmuteRequest !== undefined) {
                if (allowGuestUnmuteRequest instanceof AllowGuestUnmuteRequest) {
                    conferenceID = allowGuestUnmuteRequest.conferenceID;
                    xConferenceAuthorization = allowGuestUnmuteRequest.xConferenceAuthorization;
                    body = allowGuestUnmuteRequest.body
                } else {
                    conferenceID = allowGuestUnmuteRequest['conferenceID'];
                    xConferenceAuthorization = allowGuestUnmuteRequest['X-Conference-Authorization'];
                    body = allowGuestUnmuteRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling allowGuestUnmute.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于允许等候室中的成员进入会议。可以允许全部成员进入会议，或者允许指定成员进入会议。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowWaitingParticipant(allowWaitingParticipantRequest?: AllowWaitingParticipantRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/allowWaitingParticipant",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (allowWaitingParticipantRequest !== null && allowWaitingParticipantRequest !== undefined) {
                if (allowWaitingParticipantRequest instanceof AllowWaitingParticipantRequest) {
                    conferenceID = allowWaitingParticipantRequest.conferenceID;
                    xConferenceAuthorization = allowWaitingParticipantRequest.xConferenceAuthorization;
                    body = allowWaitingParticipantRequest.body
                } else {
                    conferenceID = allowWaitingParticipantRequest['conferenceID'];
                    xConferenceAuthorization = allowWaitingParticipantRequest['X-Conference-Authorization'];
                    body = allowWaitingParticipantRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling allowWaitingParticipant.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口将云会议室分配给用户、专业会议终端（TE10、TE20、HUAWEI Board、HUAWEI Bar 500及HUAWEI Box系列）、智慧屏TV、电子白板（SmartRooms）、IdeaHub。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateVmr(associateVmrRequest?: AssociateVmrRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/vmr/assign-to-member/{account}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let account;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (associateVmrRequest !== null && associateVmrRequest !== undefined) {
                if (associateVmrRequest instanceof AssociateVmrRequest) {
                    account = associateVmrRequest.account;
                    body = associateVmrRequest.body
                    xRequestId = associateVmrRequest.xRequestId;
                    acceptLanguage = associateVmrRequest.acceptLanguage;
                    accountType = associateVmrRequest.accountType;
                } else {
                    account = associateVmrRequest['account'];
                    body = associateVmrRequest['body'];
                    xRequestId = associateVmrRequest['X-Request-Id'];
                    acceptLanguage = associateVmrRequest['Accept-Language'];
                    accountType = associateVmrRequest['accountType'];
                }
            }

        
            if (account === null || account === undefined) {
            throw new RequiredError('account','Required parameter account was null or undefined when calling associateVmr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'account': account, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过该接口批量删除企业管理员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteCorpAdmins(batchDeleteCorpAdminsRequest?: BatchDeleteCorpAdminsRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/admin/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (batchDeleteCorpAdminsRequest !== null && batchDeleteCorpAdminsRequest !== undefined) {
                if (batchDeleteCorpAdminsRequest instanceof BatchDeleteCorpAdminsRequest) {
                    body = batchDeleteCorpAdminsRequest.body
                    xRequestId = batchDeleteCorpAdminsRequest.xRequestId;
                    acceptLanguage = batchDeleteCorpAdminsRequest.acceptLanguage;
                    accountType = batchDeleteCorpAdminsRequest.accountType;
                } else {
                    body = batchDeleteCorpAdminsRequest['body'];
                    xRequestId = batchDeleteCorpAdminsRequest['X-Request-Id'];
                    acceptLanguage = batchDeleteCorpAdminsRequest['Accept-Language'];
                    accountType = batchDeleteCorpAdminsRequest['accountType'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口批量删除专业会议终端，返回删除失败的列表。
         * &gt; 如果需要删除Ideahub、SmartRooms、智慧屏TV请使用[[批量删除用户](https://support.huaweicloud.com/api-meeting/meeting_21_0070.html)](tag:hws)[[批量删除用户](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0070.html)](tag:hk)接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDevices(batchDeleteDevicesRequest?: BatchDeleteDevicesRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/device/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (batchDeleteDevicesRequest !== null && batchDeleteDevicesRequest !== undefined) {
                if (batchDeleteDevicesRequest instanceof BatchDeleteDevicesRequest) {
                    body = batchDeleteDevicesRequest.body
                    xRequestId = batchDeleteDevicesRequest.xRequestId;
                    acceptLanguage = batchDeleteDevicesRequest.acceptLanguage;
                } else {
                    body = batchDeleteDevicesRequest['body'];
                    xRequestId = batchDeleteDevicesRequest['X-Request-Id'];
                    acceptLanguage = batchDeleteDevicesRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除信息窗素材。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteMaterials(batchDeleteMaterialsRequest?: BatchDeleteMaterialsRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/sss/materials/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (batchDeleteMaterialsRequest !== null && batchDeleteMaterialsRequest !== undefined) {
                if (batchDeleteMaterialsRequest instanceof BatchDeleteMaterialsRequest) {
                    body = batchDeleteMaterialsRequest.body
                    xRequestId = batchDeleteMaterialsRequest.xRequestId;
                    acceptLanguage = batchDeleteMaterialsRequest.acceptLanguage;
                } else {
                    body = batchDeleteMaterialsRequest['body'];
                    xRequestId = batchDeleteMaterialsRequest['X-Request-Id'];
                    acceptLanguage = batchDeleteMaterialsRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除信息窗节目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePrograms(batchDeleteProgramsRequest?: BatchDeleteProgramsRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/sss/programs/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (batchDeleteProgramsRequest !== null && batchDeleteProgramsRequest !== undefined) {
                if (batchDeleteProgramsRequest instanceof BatchDeleteProgramsRequest) {
                    body = batchDeleteProgramsRequest.body
                    xRequestId = batchDeleteProgramsRequest.xRequestId;
                    acceptLanguage = batchDeleteProgramsRequest.acceptLanguage;
                } else {
                    body = batchDeleteProgramsRequest['body'];
                    xRequestId = batchDeleteProgramsRequest['X-Request-Id'];
                    acceptLanguage = batchDeleteProgramsRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除信息窗发布。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePublications(batchDeletePublicationsRequest?: BatchDeletePublicationsRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/sss/publications/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (batchDeletePublicationsRequest !== null && batchDeletePublicationsRequest !== undefined) {
                if (batchDeletePublicationsRequest instanceof BatchDeletePublicationsRequest) {
                    body = batchDeletePublicationsRequest.body
                    xRequestId = batchDeletePublicationsRequest.xRequestId;
                    acceptLanguage = batchDeletePublicationsRequest.acceptLanguage;
                } else {
                    body = batchDeletePublicationsRequest['body'];
                    xRequestId = batchDeletePublicationsRequest['X-Request-Id'];
                    acceptLanguage = batchDeletePublicationsRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口批量删除企业用户。删除多个用户时，全部删除成功或者全部删除失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteUsers(batchDeleteUsersRequest?: BatchDeleteUsersRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/member/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (batchDeleteUsersRequest !== null && batchDeleteUsersRequest !== undefined) {
                if (batchDeleteUsersRequest instanceof BatchDeleteUsersRequest) {
                    body = batchDeleteUsersRequest.body
                    xRequestId = batchDeleteUsersRequest.xRequestId;
                    acceptLanguage = batchDeleteUsersRequest.acceptLanguage;
                    accountType = batchDeleteUsersRequest.accountType;
                } else {
                    body = batchDeleteUsersRequest['body'];
                    xRequestId = batchDeleteUsersRequest['X-Request-Id'];
                    acceptLanguage = batchDeleteUsersRequest['Accept-Language'];
                    accountType = batchDeleteUsersRequest['accountType'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于批量设置来宾的举手/放下举手状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchHand(batchHandRequest?: BatchHandRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/batch/hands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (batchHandRequest !== null && batchHandRequest !== undefined) {
                if (batchHandRequest instanceof BatchHandRequest) {
                    conferenceID = batchHandRequest.conferenceID;
                    xConferenceAuthorization = batchHandRequest.xConferenceAuthorization;
                    body = batchHandRequest.body
                } else {
                    conferenceID = batchHandRequest['conferenceID'];
                    xConferenceAuthorization = batchHandRequest['X-Conference-Authorization'];
                    body = batchHandRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling batchHand.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量查询用户详情，支持指定第三方账号查询详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowUserDetails(batchShowUserDetailsRequest?: BatchShowUserDetailsRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/abs/users/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let idType;

            if (batchShowUserDetailsRequest !== null && batchShowUserDetailsRequest !== undefined) {
                if (batchShowUserDetailsRequest instanceof BatchShowUserDetailsRequest) {
                    xRequestId = batchShowUserDetailsRequest.xRequestId;
                    acceptLanguage = batchShowUserDetailsRequest.acceptLanguage;
                    idType = batchShowUserDetailsRequest.idType;
                    body = batchShowUserDetailsRequest.body
                } else {
                    xRequestId = batchShowUserDetailsRequest['X-Request-Id'];
                    acceptLanguage = batchShowUserDetailsRequest['Accept-Language'];
                    idType = batchShowUserDetailsRequest['idType'];
                    body = batchShowUserDetailsRequest['body'];
                }
            }

        
            if (idType !== null && idType !== undefined) {
                localVarQueryParameter['idType'] = idType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口批量修改专业会议终端状态。当硬终端资源到期后，若企业内对应资源的硬终端超过数量后会被系统随机自动停用，此时可通过该接口修改专业会议终端的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateDevicesStatus(batchUpdateDevicesStatusRequest?: BatchUpdateDevicesStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/corp/device/status/{value}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let value;
            
            let xRequestId;
            
            let acceptLanguage;

            if (batchUpdateDevicesStatusRequest !== null && batchUpdateDevicesStatusRequest !== undefined) {
                if (batchUpdateDevicesStatusRequest instanceof BatchUpdateDevicesStatusRequest) {
                    value = batchUpdateDevicesStatusRequest.value;
                    body = batchUpdateDevicesStatusRequest.body
                    xRequestId = batchUpdateDevicesStatusRequest.xRequestId;
                    acceptLanguage = batchUpdateDevicesStatusRequest.acceptLanguage;
                } else {
                    value = batchUpdateDevicesStatusRequest['value'];
                    body = batchUpdateDevicesStatusRequest['body'];
                    xRequestId = batchUpdateDevicesStatusRequest['X-Request-Id'];
                    acceptLanguage = batchUpdateDevicesStatusRequest['Accept-Language'];
                }
            }

        
            if (value === null || value === undefined) {
            throw new RequiredError('value','Required parameter value was null or undefined when calling batchUpdateDevicesStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'value': value, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口批量修改用户状态，当用户帐号数资源或者电子白板（SmartRooms）资源到期后，若企业内对应资源的用户帐号超过数量后会被系统随机自动停用，此时可通过该接口修改用户的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateUserStatus(batchUpdateUserStatusRequest?: BatchUpdateUserStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/corp/member/status/{value}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let value;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (batchUpdateUserStatusRequest !== null && batchUpdateUserStatusRequest !== undefined) {
                if (batchUpdateUserStatusRequest instanceof BatchUpdateUserStatusRequest) {
                    value = batchUpdateUserStatusRequest.value;
                    body = batchUpdateUserStatusRequest.body
                    xRequestId = batchUpdateUserStatusRequest.xRequestId;
                    acceptLanguage = batchUpdateUserStatusRequest.acceptLanguage;
                    accountType = batchUpdateUserStatusRequest.accountType;
                } else {
                    value = batchUpdateUserStatusRequest['value'];
                    body = batchUpdateUserStatusRequest['body'];
                    xRequestId = batchUpdateUserStatusRequest['X-Request-Id'];
                    acceptLanguage = batchUpdateUserStatusRequest['Accept-Language'];
                    accountType = batchUpdateUserStatusRequest['accountType'];
                }
            }

        
            if (value === null || value === undefined) {
            throw new RequiredError('value','Required parameter value was null or undefined when calling batchUpdateUserStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'value': value, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于广播指定的与会者。同一时间，只允许一个与会者被广播。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        broadcastParticipant(broadcastParticipantRequest?: BroadcastParticipantRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/broadcast",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (broadcastParticipantRequest !== null && broadcastParticipantRequest !== undefined) {
                if (broadcastParticipantRequest instanceof BroadcastParticipantRequest) {
                    conferenceID = broadcastParticipantRequest.conferenceID;
                    participantID = broadcastParticipantRequest.participantID;
                    xConferenceAuthorization = broadcastParticipantRequest.xConferenceAuthorization;
                } else {
                    conferenceID = broadcastParticipantRequest['conferenceID'];
                    participantID = broadcastParticipantRequest['participantID'];
                    xConferenceAuthorization = broadcastParticipantRequest['X-Conference-Authorization'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling broadcastParticipant.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling broadcastParticipant.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于取消广播，包括：取消广播多画面，取消广播会场，取消点名会场。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelBroadcast(cancelBroadcastRequest?: CancelBroadcastRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/cancelBroadcast",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (cancelBroadcastRequest !== null && cancelBroadcastRequest !== undefined) {
                if (cancelBroadcastRequest instanceof CancelBroadcastRequest) {
                    conferenceID = cancelBroadcastRequest.conferenceID;
                    xConferenceAuthorization = cancelBroadcastRequest.xConferenceAuthorization;
                } else {
                    conferenceID = cancelBroadcastRequest['conferenceID'];
                    xConferenceAuthorization = cancelBroadcastRequest['X-Conference-Authorization'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling cancelBroadcast.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于取消预约的会议。企业管理员可以取消本企业下用户创建的会议，普通用户只能取消自己创建的会议。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelMeeting(cancelMeetingRequest?: CancelMeetingRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/mmc/management/conferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let userUUID;
            
            let type;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (cancelMeetingRequest !== null && cancelMeetingRequest !== undefined) {
                if (cancelMeetingRequest instanceof CancelMeetingRequest) {
                    conferenceID = cancelMeetingRequest.conferenceID;
                    userUUID = cancelMeetingRequest.userUUID;
                    type = cancelMeetingRequest.type;
                    xAuthorizationType = cancelMeetingRequest.xAuthorizationType;
                    xSiteId = cancelMeetingRequest.xSiteId;
                } else {
                    conferenceID = cancelMeetingRequest['conferenceID'];
                    userUUID = cancelMeetingRequest['userUUID'];
                    type = cancelMeetingRequest['type'];
                    xAuthorizationType = cancelMeetingRequest['X-Authorization-Type'];
                    xSiteId = cancelMeetingRequest['X-Site-Id'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling cancelMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于取消周期性会议。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelRecurringMeeting(cancelRecurringMeetingRequest?: CancelRecurringMeetingRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/mmc/management/cycleconferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let xAuthorizationType;
            
            let userUUID;
            
            let xSiteId;
            
            let type;

            if (cancelRecurringMeetingRequest !== null && cancelRecurringMeetingRequest !== undefined) {
                if (cancelRecurringMeetingRequest instanceof CancelRecurringMeetingRequest) {
                    conferenceID = cancelRecurringMeetingRequest.conferenceID;
                    xAuthorizationType = cancelRecurringMeetingRequest.xAuthorizationType;
                    userUUID = cancelRecurringMeetingRequest.userUUID;
                    xSiteId = cancelRecurringMeetingRequest.xSiteId;
                    type = cancelRecurringMeetingRequest.type;
                } else {
                    conferenceID = cancelRecurringMeetingRequest['conferenceID'];
                    xAuthorizationType = cancelRecurringMeetingRequest['X-Authorization-Type'];
                    userUUID = cancelRecurringMeetingRequest['userUUID'];
                    xSiteId = cancelRecurringMeetingRequest['X-Site-Id'];
                    type = cancelRecurringMeetingRequest['type'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling cancelRecurringMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于取消周期性会议的子会议。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelRecurringSubMeeting(cancelRecurringSubMeetingRequest?: CancelRecurringSubMeetingRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/mmc/management/conferences/cyclesubconf",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xAuthorizationType;
            
            let userUUID;
            
            let xSiteId;
            
            let type;

            if (cancelRecurringSubMeetingRequest !== null && cancelRecurringSubMeetingRequest !== undefined) {
                if (cancelRecurringSubMeetingRequest instanceof CancelRecurringSubMeetingRequest) {
                    conferenceID = cancelRecurringSubMeetingRequest.conferenceID;
                    body = cancelRecurringSubMeetingRequest.body
                    xAuthorizationType = cancelRecurringSubMeetingRequest.xAuthorizationType;
                    userUUID = cancelRecurringSubMeetingRequest.userUUID;
                    xSiteId = cancelRecurringSubMeetingRequest.xSiteId;
                    type = cancelRecurringSubMeetingRequest.type;
                } else {
                    conferenceID = cancelRecurringSubMeetingRequest['conferenceID'];
                    body = cancelRecurringSubMeetingRequest['body'];
                    xAuthorizationType = cancelRecurringSubMeetingRequest['X-Authorization-Type'];
                    userUUID = cancelRecurringSubMeetingRequest['userUUID'];
                    xSiteId = cancelRecurringSubMeetingRequest['X-Site-Id'];
                    type = cancelRecurringSubMeetingRequest['type'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling cancelRecurringSubMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口提供校验滑块验证码。服务器收到请求，返回校验结果。用户在前台界面通过滑块操作匹配图形，使得抠图和原图吻合。然后服务器进行校验滑块验证码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkSlideVerifyCode(checkSlideVerifyCodeRequest?: CheckSlideVerifyCodeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/acs/auth/slideverifycode/check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (checkSlideVerifyCodeRequest !== null && checkSlideVerifyCodeRequest !== undefined) {
                if (checkSlideVerifyCodeRequest instanceof CheckSlideVerifyCodeRequest) {
                    body = checkSlideVerifyCodeRequest.body
                    xRequestID = checkSlideVerifyCodeRequest.xRequestID;
                    acceptLanguage = checkSlideVerifyCodeRequest.acceptLanguage;
                } else {
                    body = checkSlideVerifyCodeRequest['body'];
                    xRequestID = checkSlideVerifyCodeRequest['X-Request-ID'];
                    acceptLanguage = checkSlideVerifyCodeRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口提供校验token合法性功能。服务器收到请求后，验证token合法性并返回结果。如果参数needGenNewToken为true时，生成新的token并返回。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkToken(checkTokenRequest?: CheckTokenRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/acs/token/validate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (checkTokenRequest !== null && checkTokenRequest !== undefined) {
                if (checkTokenRequest instanceof CheckTokenRequest) {
                    body = checkTokenRequest.body
                    xRequestID = checkTokenRequest.xRequestID;
                    acceptLanguage = checkTokenRequest.acceptLanguage;
                } else {
                    body = checkTokenRequest['body'];
                    xRequestID = checkTokenRequest['X-Request-ID'];
                    acceptLanguage = checkTokenRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业用户通过该接口校验手机和邮箱对应的验证码，一分钟内记录尝试次数不得超过5次。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkVeriCodeForUpdateUserInfo(checkVeriCodeForUpdateUserInfoRequest?: CheckVeriCodeForUpdateUserInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/member/verification-code/verify",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (checkVeriCodeForUpdateUserInfoRequest !== null && checkVeriCodeForUpdateUserInfoRequest !== undefined) {
                if (checkVeriCodeForUpdateUserInfoRequest instanceof CheckVeriCodeForUpdateUserInfoRequest) {
                    body = checkVeriCodeForUpdateUserInfoRequest.body
                    xRequestId = checkVeriCodeForUpdateUserInfoRequest.xRequestId;
                    acceptLanguage = checkVeriCodeForUpdateUserInfoRequest.acceptLanguage;
                } else {
                    body = checkVeriCodeForUpdateUserInfoRequest['body'];
                    xRequestId = checkVeriCodeForUpdateUserInfoRequest['X-Request-Id'];
                    acceptLanguage = checkVeriCodeForUpdateUserInfoRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口提供校验验证码，服务器收到请求，返回结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkVerifyCode(checkVerifyCodeRequest?: CheckVerifyCodeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/acs/verifycode/check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (checkVerifyCodeRequest !== null && checkVerifyCodeRequest !== undefined) {
                if (checkVerifyCodeRequest instanceof CheckVerifyCodeRequest) {
                    body = checkVerifyCodeRequest.body
                    xRequestID = checkVerifyCodeRequest.xRequestID;
                    acceptLanguage = checkVerifyCodeRequest.acceptLanguage;
                } else {
                    body = checkVerifyCodeRequest['body'];
                    xRequestID = checkVerifyCodeRequest['X-Request-ID'];
                    acceptLanguage = checkVerifyCodeRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于匿名用户入会鉴权。请求根据会议ID和密码鉴权，返回鉴权随机数（可以根据该随机数获取匿名用户信息、会议信息等）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAnonymousAuthRandom(createAnonymousAuthRandomRequest?: CreateAnonymousAuthRandomRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/anonymous/auth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let xPassword;

            if (createAnonymousAuthRandomRequest !== null && createAnonymousAuthRandomRequest !== undefined) {
                if (createAnonymousAuthRandomRequest instanceof CreateAnonymousAuthRandomRequest) {
                    conferenceID = createAnonymousAuthRandomRequest.conferenceID;
                    xPassword = createAnonymousAuthRandomRequest.xPassword;
                } else {
                    conferenceID = createAnonymousAuthRandomRequest['conferenceID'];
                    xPassword = createAnonymousAuthRandomRequest['X-Password'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling createAnonymousAuthRandom.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (xPassword !== undefined && xPassword !== null) {
                localVarHeaderParameter['X-Password'] = String(xPassword);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取正在召开会议的会控Token（未开始的会议调用该接口返回失败）。Token有效期是半个小时。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConfToken(createConfTokenRequest?: CreateConfTokenRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/control/conferences/token",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let xPassword;
            
            let xLoginType;
            
            let xConferenceAuthorization;
            
            let xNonce;

            if (createConfTokenRequest !== null && createConfTokenRequest !== undefined) {
                if (createConfTokenRequest instanceof CreateConfTokenRequest) {
                    conferenceID = createConfTokenRequest.conferenceID;
                    xPassword = createConfTokenRequest.xPassword;
                    xLoginType = createConfTokenRequest.xLoginType;
                    xConferenceAuthorization = createConfTokenRequest.xConferenceAuthorization;
                    xNonce = createConfTokenRequest.xNonce;
                } else {
                    conferenceID = createConfTokenRequest['conferenceID'];
                    xPassword = createConfTokenRequest['X-Password'];
                    xLoginType = createConfTokenRequest['X-Login-Type'];
                    xConferenceAuthorization = createConfTokenRequest['X-Conference-Authorization'];
                    xNonce = createConfTokenRequest['X-Nonce'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling createConfToken.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            if (xPassword !== undefined && xPassword !== null) {
                localVarHeaderParameter['X-Password'] = String(xPassword);
            }
            if (xLoginType !== undefined && xLoginType !== null) {
                localVarHeaderParameter['X-Login-Type'] = String(xLoginType);
            }
            if (xNonce !== undefined && xNonce !== null) {
                localVarHeaderParameter['X-Nonce'] = String(xNonce);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建立即会议和预约会议。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMeeting(createMeetingRequest?: CreateMeetingRequest) {
            const options = {
                method: "POST",
                url: "/v1/mmc/management/conferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let userUUID;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (createMeetingRequest !== null && createMeetingRequest !== undefined) {
                if (createMeetingRequest instanceof CreateMeetingRequest) {
                    body = createMeetingRequest.body
                    userUUID = createMeetingRequest.userUUID;
                    xAuthorizationType = createMeetingRequest.xAuthorizationType;
                    xSiteId = createMeetingRequest.xSiteId;
                } else {
                    body = createMeetingRequest['body'];
                    userUUID = createMeetingRequest['userUUID'];
                    xAuthorizationType = createMeetingRequest['X-Authorization-Type'];
                    xSiteId = createMeetingRequest['X-Site-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过Access Token生成页面免登陆跳转到华为云会议的Portal的nonce信息。获取到nonce信息后，通过链接https://meeting.huaweicloud.com/?lang&#x3D;zh-CN&amp;nonce&#x3D;xxxxxxxxxxxxx#/login进行免登陆跳转。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPortalRefNonce(createPortalRefNonceRequest?: CreatePortalRefNonceRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/acs/auth/portal-ref-nonce",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRequestId;
            
            let acceptLanguage;

            if (createPortalRefNonceRequest !== null && createPortalRefNonceRequest !== undefined) {
                if (createPortalRefNonceRequest instanceof CreatePortalRefNonceRequest) {
                    xRequestId = createPortalRefNonceRequest.xRequestId;
                    acceptLanguage = createPortalRefNonceRequest.acceptLanguage;
                } else {
                    xRequestId = createPortalRefNonceRequest['X-Request-Id'];
                    acceptLanguage = createPortalRefNonceRequest['Accept-Language'];
                }
            }

        
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于预约周期性会议。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecurringMeeting(createRecurringMeetingRequest?: CreateRecurringMeetingRequest) {
            const options = {
                method: "POST",
                url: "/v1/mmc/management/cycleconferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xAuthorizationType;
            
            let userUUID;
            
            let xSiteId;

            if (createRecurringMeetingRequest !== null && createRecurringMeetingRequest !== undefined) {
                if (createRecurringMeetingRequest instanceof CreateRecurringMeetingRequest) {
                    body = createRecurringMeetingRequest.body
                    xAuthorizationType = createRecurringMeetingRequest.xAuthorizationType;
                    userUUID = createRecurringMeetingRequest.userUUID;
                    xSiteId = createRecurringMeetingRequest.xSiteId;
                } else {
                    body = createRecurringMeetingRequest['body'];
                    xAuthorizationType = createRecurringMeetingRequest['X-Authorization-Type'];
                    userUUID = createRecurringMeetingRequest['userUUID'];
                    xSiteId = createRecurringMeetingRequest['X-Site-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员生成智慧屏、电子白板（SmartRooms）、Ideahub的激活码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVisionActiveCode(createVisionActiveCodeRequest?: CreateVisionActiveCodeRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/vision/activecode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (createVisionActiveCodeRequest !== null && createVisionActiveCodeRequest !== undefined) {
                if (createVisionActiveCodeRequest instanceof CreateVisionActiveCodeRequest) {
                    body = createVisionActiveCodeRequest.body
                    xRequestId = createVisionActiveCodeRequest.xRequestId;
                    acceptLanguage = createVisionActiveCodeRequest.acceptLanguage;
                } else {
                    body = createVisionActiveCodeRequest['body'];
                    xRequestId = createVisionActiveCodeRequest['X-Request-Id'];
                    acceptLanguage = createVisionActiveCodeRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取会控WebSocket建链的临时Token。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWebSocketToken(createWebSocketTokenRequest?: CreateWebSocketTokenRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/control/conferences/wsToken",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (createWebSocketTokenRequest !== null && createWebSocketTokenRequest !== undefined) {
                if (createWebSocketTokenRequest instanceof CreateWebSocketTokenRequest) {
                    conferenceID = createWebSocketTokenRequest.conferenceID;
                    xConferenceAuthorization = createWebSocketTokenRequest.xConferenceAuthorization;
                } else {
                    conferenceID = createWebSocketTokenRequest['conferenceID'];
                    xConferenceAuthorization = createWebSocketTokenRequest['X-Conference-Authorization'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling createWebSocketToken.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建网络研讨会。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWebinar(createWebinarRequest?: CreateWebinarRequest) {
            const options = {
                method: "POST",
                url: "/v1/wss/webinar/open/conferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (createWebinarRequest !== null && createWebinarRequest !== undefined) {
                if (createWebinarRequest instanceof CreateWebinarRequest) {
                    body = createWebinarRequest.body
                    xRequestId = createWebinarRequest.xRequestId;
                    acceptLanguage = createWebinarRequest.acceptLanguage;
                } else {
                    body = createWebinarRequest['body'];
                    xRequestId = createWebinarRequest['X-Request-Id'];
                    acceptLanguage = createWebinarRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除与会者。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAttendees(deleteAttendeesRequest?: DeleteAttendeesRequest) {
            const options = {
                method: "POST",
                url: "/v1/mmc/control/conferences/attendees/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (deleteAttendeesRequest !== null && deleteAttendeesRequest !== undefined) {
                if (deleteAttendeesRequest instanceof DeleteAttendeesRequest) {
                    conferenceID = deleteAttendeesRequest.conferenceID;
                    xConferenceAuthorization = deleteAttendeesRequest.xConferenceAuthorization;
                    body = deleteAttendeesRequest.body
                } else {
                    conferenceID = deleteAttendeesRequest['conferenceID'];
                    xConferenceAuthorization = deleteAttendeesRequest['X-Conference-Authorization'];
                    body = deleteAttendeesRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling deleteAttendees.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除企业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCorp(deleteCorpRequest?: DeleteCorpRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/usg/dcs/sp/corp/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (deleteCorpRequest !== null && deleteCorpRequest !== undefined) {
                if (deleteCorpRequest instanceof DeleteCorpRequest) {
                    id = deleteCorpRequest.id;
                    xRequestId = deleteCorpRequest.xRequestId;
                    acceptLanguage = deleteCorpRequest.acceptLanguage;
                } else {
                    id = deleteCorpRequest['id'];
                    xRequestId = deleteCorpRequest['X-Request-Id'];
                    acceptLanguage = deleteCorpRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCorp.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口删除企业的云会议室。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCorpVmr(deleteCorpVmrRequest?: DeleteCorpVmrRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/vmr/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (deleteCorpVmrRequest !== null && deleteCorpVmrRequest !== undefined) {
                if (deleteCorpVmrRequest instanceof DeleteCorpVmrRequest) {
                    body = deleteCorpVmrRequest.body
                    xRequestId = deleteCorpVmrRequest.xRequestId;
                    acceptLanguage = deleteCorpVmrRequest.acceptLanguage;
                } else {
                    body = deleteCorpVmrRequest['body'];
                    xRequestId = deleteCorpVmrRequest['X-Request-Id'];
                    acceptLanguage = deleteCorpVmrRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口删除部门。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDepartment(deleteDepartmentRequest?: DeleteDepartmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/usg/dcs/corp/dept/{dept_code}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deptCode;
            
            let xRequestId;
            
            let acceptLanguage;

            if (deleteDepartmentRequest !== null && deleteDepartmentRequest !== undefined) {
                if (deleteDepartmentRequest instanceof DeleteDepartmentRequest) {
                    deptCode = deleteDepartmentRequest.deptCode;
                    xRequestId = deleteDepartmentRequest.xRequestId;
                    acceptLanguage = deleteDepartmentRequest.acceptLanguage;
                } else {
                    deptCode = deleteDepartmentRequest['dept_code'];
                    xRequestId = deleteDepartmentRequest['X-Request-Id'];
                    acceptLanguage = deleteDepartmentRequest['Accept-Language'];
                }
            }

        
            if (deptCode === null || deptCode === undefined) {
            throw new RequiredError('deptCode','Required parameter deptCode was null or undefined when calling deleteDepartment.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'dept_code': deptCode, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除当前会议已保存的多画面布局。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLayout(deleteLayoutRequest?: DeleteLayoutRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/mmc/control/conferences/layOut",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let uuID;
            
            let xConferenceAuthorization;

            if (deleteLayoutRequest !== null && deleteLayoutRequest !== undefined) {
                if (deleteLayoutRequest instanceof DeleteLayoutRequest) {
                    conferenceID = deleteLayoutRequest.conferenceID;
                    uuID = deleteLayoutRequest.uuID;
                    xConferenceAuthorization = deleteLayoutRequest.xConferenceAuthorization;
                } else {
                    conferenceID = deleteLayoutRequest['conferenceID'];
                    uuID = deleteLayoutRequest['uuID'];
                    xConferenceAuthorization = deleteLayoutRequest['X-Conference-Authorization'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling deleteLayout.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (uuID === null || uuID === undefined) {
                throw new RequiredError('uuID','Required parameter uuID was null or undefined when calling deleteLayout.');
            }
            if (uuID !== null && uuID !== undefined) {
                localVarQueryParameter['uuID'] = uuID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于批量删除会议的录制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRecordings(deleteRecordingsRequest?: DeleteRecordingsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/mmc/management/record/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let confUUIDs;
            
            let userUUID;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (deleteRecordingsRequest !== null && deleteRecordingsRequest !== undefined) {
                if (deleteRecordingsRequest instanceof DeleteRecordingsRequest) {
                    confUUIDs = deleteRecordingsRequest.confUUIDs;
                    userUUID = deleteRecordingsRequest.userUUID;
                    xAuthorizationType = deleteRecordingsRequest.xAuthorizationType;
                    xSiteId = deleteRecordingsRequest.xSiteId;
                } else {
                    confUUIDs = deleteRecordingsRequest['confUUIDs'];
                    userUUID = deleteRecordingsRequest['userUUID'];
                    xAuthorizationType = deleteRecordingsRequest['X-Authorization-Type'];
                    xSiteId = deleteRecordingsRequest['X-Site-Id'];
                }
            }

        
            if (confUUIDs === null || confUUIDs === undefined) {
                throw new RequiredError('confUUIDs','Required parameter confUUIDs was null or undefined when calling deleteRecordings.');
            }
            if (confUUIDs !== null && confUUIDs !== undefined) {
                localVarQueryParameter['confUUIDs'] = confUUIDs;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业删除资源项，删除资源项后，企业资源总数会自动减少。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResource(deleteResourceRequest?: DeleteResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/sp/corp/{corp_id}/resource/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let corpId;
            
            let xRequestId;
            
            let acceptLanguage;

            if (deleteResourceRequest !== null && deleteResourceRequest !== undefined) {
                if (deleteResourceRequest instanceof DeleteResourceRequest) {
                    corpId = deleteResourceRequest.corpId;
                    body = deleteResourceRequest.body
                    xRequestId = deleteResourceRequest.xRequestId;
                    acceptLanguage = deleteResourceRequest.acceptLanguage;
                } else {
                    corpId = deleteResourceRequest['corp_id'];
                    body = deleteResourceRequest['body'];
                    xRequestId = deleteResourceRequest['X-Request-Id'];
                    acceptLanguage = deleteResourceRequest['Accept-Language'];
                }
            }

        
            if (corpId === null || corpId === undefined) {
            throw new RequiredError('corpId','Required parameter corpId was null or undefined when calling deleteResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'corp_id': corpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口提供注销功能。服务器收到请求后，删除该Token。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteToken(deleteTokenRequest?: DeleteTokenRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/usg/acs/token",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRequestID;
            
            let acceptLanguage;

            if (deleteTokenRequest !== null && deleteTokenRequest !== undefined) {
                if (deleteTokenRequest instanceof DeleteTokenRequest) {
                    xRequestID = deleteTokenRequest.xRequestID;
                    acceptLanguage = deleteTokenRequest.acceptLanguage;
                } else {
                    xRequestID = deleteTokenRequest['X-Request-ID'];
                    acceptLanguage = deleteTokenRequest['Accept-Language'];
                }
            }

        
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员批量删除激活码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVisionActiveCode(deleteVisionActiveCodeRequest?: DeleteVisionActiveCodeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/usg/dcs/corp/vision/activecode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (deleteVisionActiveCodeRequest !== null && deleteVisionActiveCodeRequest !== undefined) {
                if (deleteVisionActiveCodeRequest instanceof DeleteVisionActiveCodeRequest) {
                    body = deleteVisionActiveCodeRequest.body
                    xRequestId = deleteVisionActiveCodeRequest.xRequestId;
                    acceptLanguage = deleteVisionActiveCodeRequest.acceptLanguage;
                } else {
                    body = deleteVisionActiveCodeRequest['body'];
                    xRequestId = deleteVisionActiveCodeRequest['X-Request-Id'];
                    acceptLanguage = deleteVisionActiveCodeRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于管理员删除已配置的事件推送设置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWebHookConfig(deleteWebHookConfigRequest?: DeleteWebHookConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/mmc/management/webhook/link-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;

            if (deleteWebHookConfigRequest !== null && deleteWebHookConfigRequest !== undefined) {
                if (deleteWebHookConfigRequest instanceof DeleteWebHookConfigRequest) {
                    id = deleteWebHookConfigRequest.id;
                } else {
                    id = deleteWebHookConfigRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteWebHookConfig.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于取消已预约的网络研讨会。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWebinar(deleteWebinarRequest?: DeleteWebinarRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/wss/webinar/open/conferences/{conference_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let conferenceId;
            
            let xRequestId;
            
            let acceptLanguage;

            if (deleteWebinarRequest !== null && deleteWebinarRequest !== undefined) {
                if (deleteWebinarRequest instanceof DeleteWebinarRequest) {
                    conferenceId = deleteWebinarRequest.conferenceId;
                    xRequestId = deleteWebinarRequest.xRequestId;
                    acceptLanguage = deleteWebinarRequest.acceptLanguage;
                } else {
                    conferenceId = deleteWebinarRequest['conference_id'];
                    xRequestId = deleteWebinarRequest['X-Request-Id'];
                    acceptLanguage = deleteWebinarRequest['Accept-Language'];
                }
            }

        
            if (conferenceId === null || conferenceId === undefined) {
            throw new RequiredError('conferenceId','Required parameter conferenceId was null or undefined when calling deleteWebinar.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'conference_id': conferenceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口回收云会议室。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateVmr(disassociateVmrRequest?: DisassociateVmrRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/vmr/recycle-from-member/{account}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let account;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (disassociateVmrRequest !== null && disassociateVmrRequest !== undefined) {
                if (disassociateVmrRequest instanceof DisassociateVmrRequest) {
                    account = disassociateVmrRequest.account;
                    body = disassociateVmrRequest.body
                    xRequestId = disassociateVmrRequest.xRequestId;
                    acceptLanguage = disassociateVmrRequest.acceptLanguage;
                    accountType = disassociateVmrRequest.accountType;
                } else {
                    account = disassociateVmrRequest['account'];
                    body = disassociateVmrRequest['body'];
                    xRequestId = disassociateVmrRequest['X-Request-Id'];
                    acceptLanguage = disassociateVmrRequest['Accept-Language'];
                    accountType = disassociateVmrRequest['accountType'];
                }
            }

        
            if (account === null || account === undefined) {
            throw new RequiredError('account','Required parameter account was null or undefined when calling disassociateVmr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'account': account, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置指定与会者的举手/放下举手状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        hand(handRequest?: HandRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/hands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (handRequest !== null && handRequest !== undefined) {
                if (handRequest instanceof HandRequest) {
                    conferenceID = handRequest.conferenceID;
                    participantID = handRequest.participantID;
                    xConferenceAuthorization = handRequest.xConferenceAuthorization;
                    body = handRequest.body
                } else {
                    conferenceID = handRequest['conferenceID'];
                    participantID = handRequest['participantID'];
                    xConferenceAuthorization = handRequest['X-Conference-Authorization'];
                    body = handRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling hand.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling hand.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于挂断正在通话中的与会者。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        hangUp(hangUpRequest?: HangUpRequest) {
            const options = {
                method: "POST",
                url: "/v1/mmc/control/conferences/participants/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (hangUpRequest !== null && hangUpRequest !== undefined) {
                if (hangUpRequest instanceof HangUpRequest) {
                    conferenceID = hangUpRequest.conferenceID;
                    xConferenceAuthorization = hangUpRequest.xConferenceAuthorization;
                    body = hangUpRequest.body
                } else {
                    conferenceID = hangUpRequest['conferenceID'];
                    xConferenceAuthorization = hangUpRequest['X-Conference-Authorization'];
                    body = hangUpRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling hangUp.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于邀请指定与会者开启、关闭摄像头。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        inviteOperateVideo(inviteOperateVideoRequest?: InviteOperateVideoRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/video",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (inviteOperateVideoRequest !== null && inviteOperateVideoRequest !== undefined) {
                if (inviteOperateVideoRequest instanceof InviteOperateVideoRequest) {
                    conferenceID = inviteOperateVideoRequest.conferenceID;
                    participantID = inviteOperateVideoRequest.participantID;
                    xConferenceAuthorization = inviteOperateVideoRequest.xConferenceAuthorization;
                    body = inviteOperateVideoRequest.body
                } else {
                    conferenceID = inviteOperateVideoRequest['conferenceID'];
                    participantID = inviteOperateVideoRequest['participantID'];
                    xConferenceAuthorization = inviteOperateVideoRequest['X-Conference-Authorization'];
                    body = inviteOperateVideoRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling inviteOperateVideo.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling inviteOperateVideo.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于邀请与会者加入会议。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        inviteParticipant(inviteParticipantRequest?: InviteParticipantRequest) {
            const options = {
                method: "POST",
                url: "/v1/mmc/control/conferences/participants",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (inviteParticipantRequest !== null && inviteParticipantRequest !== undefined) {
                if (inviteParticipantRequest instanceof InviteParticipantRequest) {
                    conferenceID = inviteParticipantRequest.conferenceID;
                    xConferenceAuthorization = inviteParticipantRequest.xConferenceAuthorization;
                    body = inviteParticipantRequest.body
                } else {
                    conferenceID = inviteParticipantRequest['conferenceID'];
                    xConferenceAuthorization = inviteParticipantRequest['X-Conference-Authorization'];
                    body = inviteParticipantRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling inviteParticipant.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于邀请/取消邀请指定与会人共享桌面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        inviteShare(inviteShareRequest?: InviteShareRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/share/invite",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (inviteShareRequest !== null && inviteShareRequest !== undefined) {
                if (inviteShareRequest instanceof InviteShareRequest) {
                    conferenceID = inviteShareRequest.conferenceID;
                    participantID = inviteShareRequest.participantID;
                    xConferenceAuthorization = inviteShareRequest.xConferenceAuthorization;
                    body = inviteShareRequest.body
                } else {
                    conferenceID = inviteShareRequest['conferenceID'];
                    participantID = inviteShareRequest['participantID'];
                    xConferenceAuthorization = inviteShareRequest['X-Conference-Authorization'];
                    body = inviteShareRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling inviteShare.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling inviteShare.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过手机号码或者邮箱地址邀请用户加入企业。
         * * 若被邀请用户在华为云会议系统中不存在，则：
         *   - 华为云会议免费版和华为云会议标准版发送短信/邮件邀请用户完成注册后加入企业。用户注册成功后，加入该企业。
         *   - 华为云会议旗舰版在企业内直接添加该用户。用户会收到华为云会议的初始密码，用户第一次以手机号或者邮箱登录时，需要修改密码。
         * * 若被邀请用户在华为云会议系统中存在，则该用户会收到短信或者邮件确认。确认完成后改用户加入企业内。该用户的密码保持原来的密码不变。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        inviteUser(inviteUserRequest?: InviteUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/member/add",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (inviteUserRequest !== null && inviteUserRequest !== undefined) {
                if (inviteUserRequest instanceof InviteUserRequest) {
                    body = inviteUserRequest.body
                    xRequestId = inviteUserRequest.xRequestId;
                    acceptLanguage = inviteUserRequest.acceptLanguage;
                } else {
                    body = inviteUserRequest['body'];
                    xRequestId = inviteUserRequest['X-Request-Id'];
                    acceptLanguage = inviteUserRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于通过会议ID和密码邀请与会者。一般用于App已知会议ID和来宾密码，通过扫码等方式获取其他终端的SIP号码后，使用该接口将其他终端邀请加入会议中。
         * &gt; 需要管理员在企业的“会议设置”&gt;“来宾扫码邀请任意硬终端入会”设置成打开，才允许通过来宾密码邀请其他终端入会。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        inviteWithPwd(inviteWithPwdRequest?: InviteWithPwdRequest) {
            const options = {
                method: "POST",
                url: "/v1/mmc/control/conferences/inviteWithPwd",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;

            if (inviteWithPwdRequest !== null && inviteWithPwdRequest !== undefined) {
                if (inviteWithPwdRequest instanceof InviteWithPwdRequest) {
                    conferenceID = inviteWithPwdRequest.conferenceID;
                    body = inviteWithPwdRequest.body
                } else {
                    conferenceID = inviteWithPwdRequest['conferenceID'];
                    body = inviteWithPwdRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling inviteWithPwd.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询历史网络研讨会。管理员可查询企业内历史网络研讨会，非管理员可查询个人历史网络研讨会。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHistoryWebinars(listHistoryWebinarsRequest?: ListHistoryWebinarsRequest) {
            const options = {
                method: "GET",
                url: "/v1/wss/webinar/open/conferences/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let sortType;
            
            let startTime;
            
            let endTime;

            if (listHistoryWebinarsRequest !== null && listHistoryWebinarsRequest !== undefined) {
                if (listHistoryWebinarsRequest instanceof ListHistoryWebinarsRequest) {
                    xRequestId = listHistoryWebinarsRequest.xRequestId;
                    acceptLanguage = listHistoryWebinarsRequest.acceptLanguage;
                    offset = listHistoryWebinarsRequest.offset;
                    limit = listHistoryWebinarsRequest.limit;
                    searchKey = listHistoryWebinarsRequest.searchKey;
                    sortType = listHistoryWebinarsRequest.sortType;
                    startTime = listHistoryWebinarsRequest.startTime;
                    endTime = listHistoryWebinarsRequest.endTime;
                } else {
                    xRequestId = listHistoryWebinarsRequest['X-Request-Id'];
                    acceptLanguage = listHistoryWebinarsRequest['Accept-Language'];
                    offset = listHistoryWebinarsRequest['offset'];
                    limit = listHistoryWebinarsRequest['limit'];
                    searchKey = listHistoryWebinarsRequest['searchKey'];
                    sortType = listHistoryWebinarsRequest['sortType'];
                    startTime = listHistoryWebinarsRequest['startTime'];
                    endTime = listHistoryWebinarsRequest['endTime'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sortType'] = sortType;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询正在召开的网络研讨会。管理员可查询企业内正在召开网络研讨会，非管理员可查询自己预订的正在召开的网络研讨会。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOngoingWebinars(listOngoingWebinarsRequest?: ListOngoingWebinarsRequest) {
            const options = {
                method: "GET",
                url: "/v1/wss/webinar/open/conferences/ongoing",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let sortType;

            if (listOngoingWebinarsRequest !== null && listOngoingWebinarsRequest !== undefined) {
                if (listOngoingWebinarsRequest instanceof ListOngoingWebinarsRequest) {
                    xRequestId = listOngoingWebinarsRequest.xRequestId;
                    acceptLanguage = listOngoingWebinarsRequest.acceptLanguage;
                    offset = listOngoingWebinarsRequest.offset;
                    limit = listOngoingWebinarsRequest.limit;
                    searchKey = listOngoingWebinarsRequest.searchKey;
                    sortType = listOngoingWebinarsRequest.sortType;
                } else {
                    xRequestId = listOngoingWebinarsRequest['X-Request-Id'];
                    acceptLanguage = listOngoingWebinarsRequest['Accept-Language'];
                    offset = listOngoingWebinarsRequest['offset'];
                    limit = listOngoingWebinarsRequest['limit'];
                    searchKey = listOngoingWebinarsRequest['searchKey'];
                    sortType = listOngoingWebinarsRequest['sortType'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sortType'] = sortType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询即将召开的网络研讨会。管理员可查询企业内即将召开网络研讨会，非管理员可查询自己预订的即将召开的网络研讨会。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUpComingWebinars(listUpComingWebinarsRequest?: ListUpComingWebinarsRequest) {
            const options = {
                method: "GET",
                url: "/v1/wss/webinar/open/conferences/upcoming",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let sortType;

            if (listUpComingWebinarsRequest !== null && listUpComingWebinarsRequest !== undefined) {
                if (listUpComingWebinarsRequest instanceof ListUpComingWebinarsRequest) {
                    xRequestId = listUpComingWebinarsRequest.xRequestId;
                    acceptLanguage = listUpComingWebinarsRequest.acceptLanguage;
                    offset = listUpComingWebinarsRequest.offset;
                    limit = listUpComingWebinarsRequest.limit;
                    searchKey = listUpComingWebinarsRequest.searchKey;
                    sortType = listUpComingWebinarsRequest.sortType;
                } else {
                    xRequestId = listUpComingWebinarsRequest['X-Request-Id'];
                    acceptLanguage = listUpComingWebinarsRequest['Accept-Language'];
                    offset = listUpComingWebinarsRequest['offset'];
                    limit = listUpComingWebinarsRequest['limit'];
                    searchKey = listUpComingWebinarsRequest['searchKey'];
                    sortType = listUpComingWebinarsRequest['sortType'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sortType'] = sortType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于启动或停止会议直播。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        live(liveRequest?: LiveRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/live",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (liveRequest !== null && liveRequest !== undefined) {
                if (liveRequest instanceof LiveRequest) {
                    conferenceID = liveRequest.conferenceID;
                    xConferenceAuthorization = liveRequest.xConferenceAuthorization;
                    body = liveRequest.body
                } else {
                    conferenceID = liveRequest['conferenceID'];
                    xConferenceAuthorization = liveRequest['X-Conference-Authorization'];
                    body = liveRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling live.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于锁定或解锁会议。锁定会议后，不允许新的来宾主动加入会议。会议锁定后使用主持人密码/主持人链接加入会议或者主持人邀请来宾不受影响。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        lockMeeting(lockMeetingRequest?: LockMeetingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/lock",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (lockMeetingRequest !== null && lockMeetingRequest !== undefined) {
                if (lockMeetingRequest instanceof LockMeetingRequest) {
                    conferenceID = lockMeetingRequest.conferenceID;
                    xConferenceAuthorization = lockMeetingRequest.xConferenceAuthorization;
                    body = lockMeetingRequest.body
                } else {
                    conferenceID = lockMeetingRequest['conferenceID'];
                    xConferenceAuthorization = lockMeetingRequest['X-Conference-Authorization'];
                    body = lockMeetingRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling lockMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于锁定或者解锁某在线会场的视频源。只适用于专业会议终端（如TE系列等）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        lockView(lockViewRequest?: LockViewRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/lockView",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (lockViewRequest !== null && lockViewRequest !== undefined) {
                if (lockViewRequest instanceof LockViewRequest) {
                    conferenceID = lockViewRequest.conferenceID;
                    participantID = lockViewRequest.participantID;
                    xConferenceAuthorization = lockViewRequest.xConferenceAuthorization;
                    body = lockViewRequest.body
                } else {
                    conferenceID = lockViewRequest['conferenceID'];
                    participantID = lockViewRequest['participantID'];
                    xConferenceAuthorization = lockViewRequest['X-Conference-Authorization'];
                    body = lockViewRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling lockView.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling lockView.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于将会中的指定与会者移入到等候室。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        moveToWaitingRoom(moveToWaitingRoomRequest?: MoveToWaitingRoomRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/moveToWaitingRoom",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (moveToWaitingRoomRequest !== null && moveToWaitingRoomRequest !== undefined) {
                if (moveToWaitingRoomRequest instanceof MoveToWaitingRoomRequest) {
                    conferenceID = moveToWaitingRoomRequest.conferenceID;
                    xConferenceAuthorization = moveToWaitingRoomRequest.xConferenceAuthorization;
                    body = moveToWaitingRoomRequest.body
                } else {
                    conferenceID = moveToWaitingRoomRequest['conferenceID'];
                    xConferenceAuthorization = moveToWaitingRoomRequest['X-Conference-Authorization'];
                    body = moveToWaitingRoomRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling moveToWaitingRoom.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置整个会议所有与会者（主持人除外）的静音/取消静音状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        muteMeeting(muteMeetingRequest?: MuteMeetingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/mute",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (muteMeetingRequest !== null && muteMeetingRequest !== undefined) {
                if (muteMeetingRequest instanceof MuteMeetingRequest) {
                    conferenceID = muteMeetingRequest.conferenceID;
                    xConferenceAuthorization = muteMeetingRequest.xConferenceAuthorization;
                    body = muteMeetingRequest.body
                } else {
                    conferenceID = muteMeetingRequest['conferenceID'];
                    xConferenceAuthorization = muteMeetingRequest['X-Conference-Authorization'];
                    body = muteMeetingRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling muteMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置指定与会者静音/取消静音状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        muteParticipant(muteParticipantRequest?: MuteParticipantRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/mute",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (muteParticipantRequest !== null && muteParticipantRequest !== undefined) {
                if (muteParticipantRequest instanceof MuteParticipantRequest) {
                    conferenceID = muteParticipantRequest.conferenceID;
                    participantID = muteParticipantRequest.participantID;
                    xConferenceAuthorization = muteParticipantRequest.xConferenceAuthorization;
                    body = muteParticipantRequest.body
                } else {
                    conferenceID = muteParticipantRequest['conferenceID'];
                    participantID = muteParticipantRequest['participantID'];
                    xConferenceAuthorization = muteParticipantRequest['X-Conference-Authorization'];
                    body = muteParticipantRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling muteParticipant.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling muteParticipant.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于延长会议时间。默认会议自动延长。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        prolongMeeting(prolongMeetingRequest?: ProlongMeetingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/duration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (prolongMeetingRequest !== null && prolongMeetingRequest !== undefined) {
                if (prolongMeetingRequest instanceof ProlongMeetingRequest) {
                    conferenceID = prolongMeetingRequest.conferenceID;
                    xConferenceAuthorization = prolongMeetingRequest.xConferenceAuthorization;
                    body = prolongMeetingRequest.body
                } else {
                    conferenceID = prolongMeetingRequest['conferenceID'];
                    xConferenceAuthorization = prolongMeetingRequest['X-Conference-Authorization'];
                    body = prolongMeetingRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling prolongMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于启动或停止会议云录制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        record(recordRequest?: RecordRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/record",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (recordRequest !== null && recordRequest !== undefined) {
                if (recordRequest instanceof RecordRequest) {
                    conferenceID = recordRequest.conferenceID;
                    xConferenceAuthorization = recordRequest.xConferenceAuthorization;
                    body = recordRequest.body
                } else {
                    conferenceID = recordRequest['conferenceID'];
                    xConferenceAuthorization = recordRequest['X-Conference-Authorization'];
                    body = recordRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling record.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重命名某个与会者。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        renameParticipant(renameParticipantRequest?: RenameParticipantRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (renameParticipantRequest !== null && renameParticipantRequest !== undefined) {
                if (renameParticipantRequest instanceof RenameParticipantRequest) {
                    conferenceID = renameParticipantRequest.conferenceID;
                    xConferenceAuthorization = renameParticipantRequest.xConferenceAuthorization;
                    body = renameParticipantRequest.body
                } else {
                    conferenceID = renameParticipantRequest['conferenceID'];
                    xConferenceAuthorization = renameParticipantRequest['X-Conference-Authorization'];
                    body = renameParticipantRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling renameParticipant.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当硬终端激活码失效时，企业管理员可以通过该接口重置激活码，使用重新获取的激活码激活终端，每24小时可重新激活5次。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetActivecode(resetActivecodeRequest?: ResetActivecodeRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/corp/device/{sn}/activecode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let sn;
            
            let xRequestId;
            
            let acceptLanguage;

            if (resetActivecodeRequest !== null && resetActivecodeRequest !== undefined) {
                if (resetActivecodeRequest instanceof ResetActivecodeRequest) {
                    sn = resetActivecodeRequest.sn;
                    body = resetActivecodeRequest.body
                    xRequestId = resetActivecodeRequest.xRequestId;
                    acceptLanguage = resetActivecodeRequest.acceptLanguage;
                } else {
                    sn = resetActivecodeRequest['sn'];
                    body = resetActivecodeRequest['body'];
                    xRequestId = resetActivecodeRequest['X-Request-Id'];
                    acceptLanguage = resetActivecodeRequest['Accept-Language'];
                }
            }

        
            if (sn === null || sn === undefined) {
            throw new RequiredError('sn','Required parameter sn was null or undefined when calling resetActivecode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'sn': sn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口提供给用户重置密码功能，服务器收到请求，重新设置用户密码并返回结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPwd(resetPwdRequest?: ResetPwdRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/acs/password/reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (resetPwdRequest !== null && resetPwdRequest !== undefined) {
                if (resetPwdRequest instanceof ResetPwdRequest) {
                    body = resetPwdRequest.body
                    xRequestID = resetPwdRequest.xRequestID;
                    acceptLanguage = resetPwdRequest.acceptLanguage;
                } else {
                    body = resetPwdRequest['body'];
                    xRequestID = resetPwdRequest['X-Request-ID'];
                    acceptLanguage = resetPwdRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口提供企业管理员重置企业成员密码的功能。当服务器收到重置密码的请求时，发送新的密码到企业成员的邮箱或者短信，并返回结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPwdByAdmin(resetPwdByAdminRequest?: ResetPwdByAdminRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/acs/password/admin/reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (resetPwdByAdminRequest !== null && resetPwdByAdminRequest !== undefined) {
                if (resetPwdByAdminRequest instanceof ResetPwdByAdminRequest) {
                    body = resetPwdByAdminRequest.body
                    xRequestID = resetPwdByAdminRequest.xRequestID;
                    acceptLanguage = resetPwdByAdminRequest.acceptLanguage;
                } else {
                    body = resetPwdByAdminRequest['body'];
                    xRequestID = resetPwdByAdminRequest['X-Request-ID'];
                    acceptLanguage = resetPwdByAdminRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员重置帐号的激活码，重置后，原设备直接解绑，必须重新激活使用,若手机邮箱不填，则不会发送新的激活码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetVisionActiveCode(resetVisionActiveCodeRequest?: ResetVisionActiveCodeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/corp/vision/activecode/{account}/reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let account;
            
            let xRequestId;
            
            let acceptLanguage;

            if (resetVisionActiveCodeRequest !== null && resetVisionActiveCodeRequest !== undefined) {
                if (resetVisionActiveCodeRequest instanceof ResetVisionActiveCodeRequest) {
                    account = resetVisionActiveCodeRequest.account;
                    body = resetVisionActiveCodeRequest.body
                    xRequestId = resetVisionActiveCodeRequest.xRequestId;
                    acceptLanguage = resetVisionActiveCodeRequest.acceptLanguage;
                } else {
                    account = resetVisionActiveCodeRequest['account'];
                    body = resetVisionActiveCodeRequest['body'];
                    xRequestId = resetVisionActiveCodeRequest['X-Request-Id'];
                    acceptLanguage = resetVisionActiveCodeRequest['Accept-Language'];
                }
            }

        
            if (account === null || account === undefined) {
            throw new RequiredError('account','Required parameter account was null or undefined when calling resetVisionActiveCode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'account': account, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于会议主席可以通过该接口开启/关闭同声传译。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resumeSimultaneousInterpretation(resumeSimultaneousInterpretationRequest?: ResumeSimultaneousInterpretationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/simultaneousInterpretation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (resumeSimultaneousInterpretationRequest !== null && resumeSimultaneousInterpretationRequest !== undefined) {
                if (resumeSimultaneousInterpretationRequest instanceof ResumeSimultaneousInterpretationRequest) {
                    conferenceID = resumeSimultaneousInterpretationRequest.conferenceID;
                    xConferenceAuthorization = resumeSimultaneousInterpretationRequest.xConferenceAuthorization;
                    body = resumeSimultaneousInterpretationRequest.body
                } else {
                    conferenceID = resumeSimultaneousInterpretationRequest['conferenceID'];
                    xConferenceAuthorization = resumeSimultaneousInterpretationRequest['X-Conference-Authorization'];
                    body = resumeSimultaneousInterpretationRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling resumeSimultaneousInterpretation.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于点名指定与会者。点名会场的效果是除了主持人外，点名与会者为非静音状态，未点名的与会者统一为静音状态。同一时间，只允许一个与会者被点名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rollcallParticipant(rollcallParticipantRequest?: RollcallParticipantRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/rollCall",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (rollcallParticipantRequest !== null && rollcallParticipantRequest !== undefined) {
                if (rollcallParticipantRequest instanceof RollcallParticipantRequest) {
                    conferenceID = rollcallParticipantRequest.conferenceID;
                    participantID = rollcallParticipantRequest.participantID;
                    xConferenceAuthorization = rollcallParticipantRequest.xConferenceAuthorization;
                } else {
                    conferenceID = rollcallParticipantRequest['conferenceID'];
                    participantID = rollcallParticipantRequest['participantID'];
                    xConferenceAuthorization = rollcallParticipantRequest['X-Conference-Authorization'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling rollcallParticipant.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling rollcallParticipant.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于保存多画面布局。保存的多画面布局，只能在当前会议使用，会议结束后，保存的多画面布局就会释放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveLayout(saveLayoutRequest?: SaveLayoutRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/layOut",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (saveLayoutRequest !== null && saveLayoutRequest !== undefined) {
                if (saveLayoutRequest instanceof SaveLayoutRequest) {
                    conferenceID = saveLayoutRequest.conferenceID;
                    xConferenceAuthorization = saveLayoutRequest.xConferenceAuthorization;
                    body = saveLayoutRequest.body
                } else {
                    conferenceID = saveLayoutRequest['conferenceID'];
                    xConferenceAuthorization = saveLayoutRequest['X-Conference-Authorization'];
                    body = saveLayoutRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling saveLayout.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定历史会议的与会者记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchAttendanceRecordsOfHisMeeting(searchAttendanceRecordsOfHisMeetingRequest?: SearchAttendanceRecordsOfHisMeetingRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/history/confAttendeeRecord",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let confUUID;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let userUUID;
            
            let xAuthorizationType;
            
            let xSiteId;
            
            let acceptLanguage;

            if (searchAttendanceRecordsOfHisMeetingRequest !== null && searchAttendanceRecordsOfHisMeetingRequest !== undefined) {
                if (searchAttendanceRecordsOfHisMeetingRequest instanceof SearchAttendanceRecordsOfHisMeetingRequest) {
                    confUUID = searchAttendanceRecordsOfHisMeetingRequest.confUUID;
                    offset = searchAttendanceRecordsOfHisMeetingRequest.offset;
                    limit = searchAttendanceRecordsOfHisMeetingRequest.limit;
                    searchKey = searchAttendanceRecordsOfHisMeetingRequest.searchKey;
                    userUUID = searchAttendanceRecordsOfHisMeetingRequest.userUUID;
                    xAuthorizationType = searchAttendanceRecordsOfHisMeetingRequest.xAuthorizationType;
                    xSiteId = searchAttendanceRecordsOfHisMeetingRequest.xSiteId;
                    acceptLanguage = searchAttendanceRecordsOfHisMeetingRequest.acceptLanguage;
                } else {
                    confUUID = searchAttendanceRecordsOfHisMeetingRequest['confUUID'];
                    offset = searchAttendanceRecordsOfHisMeetingRequest['offset'];
                    limit = searchAttendanceRecordsOfHisMeetingRequest['limit'];
                    searchKey = searchAttendanceRecordsOfHisMeetingRequest['searchKey'];
                    userUUID = searchAttendanceRecordsOfHisMeetingRequest['userUUID'];
                    xAuthorizationType = searchAttendanceRecordsOfHisMeetingRequest['X-Authorization-Type'];
                    xSiteId = searchAttendanceRecordsOfHisMeetingRequest['X-Site-Id'];
                    acceptLanguage = searchAttendanceRecordsOfHisMeetingRequest['Accept-Language'];
                }
            }

        
            if (confUUID === null || confUUID === undefined) {
                throw new RequiredError('confUUID','Required parameter confUUID was null or undefined when calling searchAttendanceRecordsOfHisMeeting.');
            }
            if (confUUID !== null && confUUID !== undefined) {
                localVarQueryParameter['confUUID'] = confUUID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SP管理员分页搜索企业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCorp(searchCorpRequest?: SearchCorpRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/sp/corp",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchCorpRequest !== null && searchCorpRequest !== undefined) {
                if (searchCorpRequest instanceof SearchCorpRequest) {
                    xRequestId = searchCorpRequest.xRequestId;
                    acceptLanguage = searchCorpRequest.acceptLanguage;
                    offset = searchCorpRequest.offset;
                    limit = searchCorpRequest.limit;
                    searchKey = searchCorpRequest.searchKey;
                } else {
                    xRequestId = searchCorpRequest['X-Request-Id'];
                    acceptLanguage = searchCorpRequest['Accept-Language'];
                    offset = searchCorpRequest['offset'];
                    limit = searchCorpRequest['limit'];
                    searchKey = searchCorpRequest['searchKey'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过该接口分页查询企业管理员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCorpAdmins(searchCorpAdminsRequest?: SearchCorpAdminsRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/admin",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchCorpAdminsRequest !== null && searchCorpAdminsRequest !== undefined) {
                if (searchCorpAdminsRequest instanceof SearchCorpAdminsRequest) {
                    xRequestId = searchCorpAdminsRequest.xRequestId;
                    acceptLanguage = searchCorpAdminsRequest.acceptLanguage;
                    offset = searchCorpAdminsRequest.offset;
                    limit = searchCorpAdminsRequest.limit;
                    searchKey = searchCorpAdminsRequest.searchKey;
                } else {
                    xRequestId = searchCorpAdminsRequest['X-Request-Id'];
                    acceptLanguage = searchCorpAdminsRequest['Accept-Language'];
                    offset = searchCorpAdminsRequest['offset'];
                    limit = searchCorpAdminsRequest['limit'];
                    searchKey = searchCorpAdminsRequest['searchKey'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业用户（含管理员）通过该接口查询该企业的通讯录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCorpDir(searchCorpDirRequest?: SearchCorpDirRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/abs/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let deptCode;
            
            let querySubDept;
            
            let searchScope;

            if (searchCorpDirRequest !== null && searchCorpDirRequest !== undefined) {
                if (searchCorpDirRequest instanceof SearchCorpDirRequest) {
                    xRequestId = searchCorpDirRequest.xRequestId;
                    acceptLanguage = searchCorpDirRequest.acceptLanguage;
                    offset = searchCorpDirRequest.offset;
                    limit = searchCorpDirRequest.limit;
                    searchKey = searchCorpDirRequest.searchKey;
                    deptCode = searchCorpDirRequest.deptCode;
                    querySubDept = searchCorpDirRequest.querySubDept;
                    searchScope = searchCorpDirRequest.searchScope;
                } else {
                    xRequestId = searchCorpDirRequest['X-Request-Id'];
                    acceptLanguage = searchCorpDirRequest['Accept-Language'];
                    offset = searchCorpDirRequest['offset'];
                    limit = searchCorpDirRequest['limit'];
                    searchKey = searchCorpDirRequest['searchKey'];
                    deptCode = searchCorpDirRequest['deptCode'];
                    querySubDept = searchCorpDirRequest['querySubDept'];
                    searchScope = searchCorpDirRequest['searchScope'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (deptCode !== null && deptCode !== undefined) {
                localVarQueryParameter['deptCode'] = deptCode;
            }
            if (querySubDept !== null && querySubDept !== undefined) {
                localVarQueryParameter['querySubDept'] = querySubDept;
            }
            if (searchScope !== null && searchScope !== undefined) {
                localVarQueryParameter['searchScope'] = searchScope;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业用户（含管理员）通过该接口查询该企业的外部联系人或者个人外部联系人。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCorpExternalDir(searchCorpExternalDirRequest?: SearchCorpExternalDirRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/abs/external-contacts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let searchScope;

            if (searchCorpExternalDirRequest !== null && searchCorpExternalDirRequest !== undefined) {
                if (searchCorpExternalDirRequest instanceof SearchCorpExternalDirRequest) {
                    xRequestId = searchCorpExternalDirRequest.xRequestId;
                    acceptLanguage = searchCorpExternalDirRequest.acceptLanguage;
                    offset = searchCorpExternalDirRequest.offset;
                    limit = searchCorpExternalDirRequest.limit;
                    searchKey = searchCorpExternalDirRequest.searchKey;
                    searchScope = searchCorpExternalDirRequest.searchScope;
                } else {
                    xRequestId = searchCorpExternalDirRequest['X-Request-Id'];
                    acceptLanguage = searchCorpExternalDirRequest['Accept-Language'];
                    offset = searchCorpExternalDirRequest['offset'];
                    limit = searchCorpExternalDirRequest['limit'];
                    searchKey = searchCorpExternalDirRequest['searchKey'];
                    searchScope = searchCorpExternalDirRequest['searchScope'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (searchScope !== null && searchScope !== undefined) {
                localVarQueryParameter['searchScope'] = searchScope;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员根据条件查询企业资源订单列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCorpResources(searchCorpResourcesRequest?: SearchCorpResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/resource-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let startExpireDate;
            
            let endExpireDate;
            
            let type;
            
            let vmrMode;
            
            let typeId;
            
            let orderId;
            
            let status;

            if (searchCorpResourcesRequest !== null && searchCorpResourcesRequest !== undefined) {
                if (searchCorpResourcesRequest instanceof SearchCorpResourcesRequest) {
                    xRequestId = searchCorpResourcesRequest.xRequestId;
                    acceptLanguage = searchCorpResourcesRequest.acceptLanguage;
                    offset = searchCorpResourcesRequest.offset;
                    limit = searchCorpResourcesRequest.limit;
                    searchKey = searchCorpResourcesRequest.searchKey;
                    startExpireDate = searchCorpResourcesRequest.startExpireDate;
                    endExpireDate = searchCorpResourcesRequest.endExpireDate;
                    type = searchCorpResourcesRequest.type;
                    vmrMode = searchCorpResourcesRequest.vmrMode;
                    typeId = searchCorpResourcesRequest.typeId;
                    orderId = searchCorpResourcesRequest.orderId;
                    status = searchCorpResourcesRequest.status;
                } else {
                    xRequestId = searchCorpResourcesRequest['X-Request-Id'];
                    acceptLanguage = searchCorpResourcesRequest['Accept-Language'];
                    offset = searchCorpResourcesRequest['offset'];
                    limit = searchCorpResourcesRequest['limit'];
                    searchKey = searchCorpResourcesRequest['searchKey'];
                    startExpireDate = searchCorpResourcesRequest['startExpireDate'];
                    endExpireDate = searchCorpResourcesRequest['endExpireDate'];
                    type = searchCorpResourcesRequest['type'];
                    vmrMode = searchCorpResourcesRequest['vmrMode'];
                    typeId = searchCorpResourcesRequest['typeId'];
                    orderId = searchCorpResourcesRequest['orderId'];
                    status = searchCorpResourcesRequest['status'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (startExpireDate !== null && startExpireDate !== undefined) {
                localVarQueryParameter['startExpireDate'] = startExpireDate;
            }
            if (endExpireDate !== null && endExpireDate !== undefined) {
                localVarQueryParameter['endExpireDate'] = endExpireDate;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (vmrMode !== null && vmrMode !== undefined) {
                localVarQueryParameter['vmrMode'] = vmrMode;
            }
            if (typeId !== null && typeId !== undefined) {
                localVarQueryParameter['typeId'] = typeId;
            }
            if (orderId !== null && orderId !== undefined) {
                localVarQueryParameter['orderId'] = orderId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口分页查询企业的云会议室。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCorpVmr(searchCorpVmrRequest?: SearchCorpVmrRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/vmr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let vmrMode;
            
            let status;

            if (searchCorpVmrRequest !== null && searchCorpVmrRequest !== undefined) {
                if (searchCorpVmrRequest instanceof SearchCorpVmrRequest) {
                    xRequestId = searchCorpVmrRequest.xRequestId;
                    acceptLanguage = searchCorpVmrRequest.acceptLanguage;
                    offset = searchCorpVmrRequest.offset;
                    limit = searchCorpVmrRequest.limit;
                    searchKey = searchCorpVmrRequest.searchKey;
                    vmrMode = searchCorpVmrRequest.vmrMode;
                    status = searchCorpVmrRequest.status;
                } else {
                    xRequestId = searchCorpVmrRequest['X-Request-Id'];
                    acceptLanguage = searchCorpVmrRequest['Accept-Language'];
                    offset = searchCorpVmrRequest['offset'];
                    limit = searchCorpVmrRequest['limit'];
                    searchKey = searchCorpVmrRequest['searchKey'];
                    vmrMode = searchCorpVmrRequest['vmrMode'];
                    status = searchCorpVmrRequest['status'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (vmrMode !== null && vmrMode !== undefined) {
                localVarQueryParameter['vmrMode'] = vmrMode;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定历史会议的会控记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCtlRecordsOfHisMeeting(searchCtlRecordsOfHisMeetingRequest?: SearchCtlRecordsOfHisMeetingRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/history/confCtlRecord",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let confUUID;
            
            let offset;
            
            let limit;
            
            let userUUID;
            
            let xAuthorizationType;
            
            let xSiteId;
            
            let acceptLanguage;

            if (searchCtlRecordsOfHisMeetingRequest !== null && searchCtlRecordsOfHisMeetingRequest !== undefined) {
                if (searchCtlRecordsOfHisMeetingRequest instanceof SearchCtlRecordsOfHisMeetingRequest) {
                    confUUID = searchCtlRecordsOfHisMeetingRequest.confUUID;
                    offset = searchCtlRecordsOfHisMeetingRequest.offset;
                    limit = searchCtlRecordsOfHisMeetingRequest.limit;
                    userUUID = searchCtlRecordsOfHisMeetingRequest.userUUID;
                    xAuthorizationType = searchCtlRecordsOfHisMeetingRequest.xAuthorizationType;
                    xSiteId = searchCtlRecordsOfHisMeetingRequest.xSiteId;
                    acceptLanguage = searchCtlRecordsOfHisMeetingRequest.acceptLanguage;
                } else {
                    confUUID = searchCtlRecordsOfHisMeetingRequest['confUUID'];
                    offset = searchCtlRecordsOfHisMeetingRequest['offset'];
                    limit = searchCtlRecordsOfHisMeetingRequest['limit'];
                    userUUID = searchCtlRecordsOfHisMeetingRequest['userUUID'];
                    xAuthorizationType = searchCtlRecordsOfHisMeetingRequest['X-Authorization-Type'];
                    xSiteId = searchCtlRecordsOfHisMeetingRequest['X-Site-Id'];
                    acceptLanguage = searchCtlRecordsOfHisMeetingRequest['Accept-Language'];
                }
            }

        
            if (confUUID === null || confUUID === undefined) {
                throw new RequiredError('confUUID','Required parameter confUUID was null or undefined when calling searchCtlRecordsOfHisMeeting.');
            }
            if (confUUID !== null && confUUID !== undefined) {
                localVarQueryParameter['confUUID'] = confUUID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口按名称查询所有的部门。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchDepartmentByName(searchDepartmentByNameRequest?: SearchDepartmentByNameRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/member/dept",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let deptName;
            
            let xRequestId;
            
            let acceptLanguage;

            if (searchDepartmentByNameRequest !== null && searchDepartmentByNameRequest !== undefined) {
                if (searchDepartmentByNameRequest instanceof SearchDepartmentByNameRequest) {
                    deptName = searchDepartmentByNameRequest.deptName;
                    xRequestId = searchDepartmentByNameRequest.xRequestId;
                    acceptLanguage = searchDepartmentByNameRequest.acceptLanguage;
                } else {
                    deptName = searchDepartmentByNameRequest['deptName'];
                    xRequestId = searchDepartmentByNameRequest['X-Request-Id'];
                    acceptLanguage = searchDepartmentByNameRequest['Accept-Language'];
                }
            }

        
            if (deptName === null || deptName === undefined) {
                throw new RequiredError('deptName','Required parameter deptName was null or undefined when calling searchDepartmentByName.');
            }
            if (deptName !== null && deptName !== undefined) {
                localVarQueryParameter['deptName'] = deptName;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口分页查询专业会议终端信息。
         * &gt; 如果需要查询Ideahub、SmartRooms、智慧屏TV请使用[[分页查询用户](https://support.huaweicloud.com/api-meeting/meeting_21_0071.html)](tag:hws)[[分页查询用户](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0071.html)](tag:hk)接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchDevices(searchDevicesRequest?: SearchDevicesRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/device",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let model;
            
            let deptCode;
            
            let enableSubDept;

            if (searchDevicesRequest !== null && searchDevicesRequest !== undefined) {
                if (searchDevicesRequest instanceof SearchDevicesRequest) {
                    xRequestId = searchDevicesRequest.xRequestId;
                    acceptLanguage = searchDevicesRequest.acceptLanguage;
                    offset = searchDevicesRequest.offset;
                    limit = searchDevicesRequest.limit;
                    searchKey = searchDevicesRequest.searchKey;
                    model = searchDevicesRequest.model;
                    deptCode = searchDevicesRequest.deptCode;
                    enableSubDept = searchDevicesRequest.enableSubDept;
                } else {
                    xRequestId = searchDevicesRequest['X-Request-Id'];
                    acceptLanguage = searchDevicesRequest['Accept-Language'];
                    offset = searchDevicesRequest['offset'];
                    limit = searchDevicesRequest['limit'];
                    searchKey = searchDevicesRequest['searchKey'];
                    model = searchDevicesRequest['model'];
                    deptCode = searchDevicesRequest['deptCode'];
                    enableSubDept = searchDevicesRequest['enableSubDept'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (model !== null && model !== undefined) {
                localVarQueryParameter['model'] = model;
            }
            if (deptCode !== null && deptCode !== undefined) {
                localVarQueryParameter['deptCode'] = deptCode;
            }
            if (enableSubDept !== null && enableSubDept !== undefined) {
                localVarQueryParameter['enableSubDept'] = enableSubDept;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询已经结束的会议。管理员可以查询本企业内所有的历史会议，普通用户仅能查询自己创建或者被邀请的历史会议。不带查询参数时，默认查询权限范围内的历史会议。
         * &gt; * 普通用户如果只是通过会议ID或者会议链接接入会议，不是预定者会前邀请或者会中主持人邀请的，则历史会议中无法查到
         * &gt; * 如果同一个会议召开并结束多次，则会产生多条历史会议（会议ID相同，会议UUID不同）
         * &gt; * 历史会议记录默认保留6个月，最长保留12个月。保留时间管理员可在“会议设置”的“历史会议留存时间”中修改
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchHisMeetings(searchHisMeetingsRequest?: SearchHisMeetingsRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startDate;
            
            let endDate;
            
            let userUUID;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let queryAll;
            
            let sortType;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (searchHisMeetingsRequest !== null && searchHisMeetingsRequest !== undefined) {
                if (searchHisMeetingsRequest instanceof SearchHisMeetingsRequest) {
                    startDate = searchHisMeetingsRequest.startDate;
                    endDate = searchHisMeetingsRequest.endDate;
                    userUUID = searchHisMeetingsRequest.userUUID;
                    offset = searchHisMeetingsRequest.offset;
                    limit = searchHisMeetingsRequest.limit;
                    searchKey = searchHisMeetingsRequest.searchKey;
                    queryAll = searchHisMeetingsRequest.queryAll;
                    sortType = searchHisMeetingsRequest.sortType;
                    xAuthorizationType = searchHisMeetingsRequest.xAuthorizationType;
                    xSiteId = searchHisMeetingsRequest.xSiteId;
                } else {
                    startDate = searchHisMeetingsRequest['startDate'];
                    endDate = searchHisMeetingsRequest['endDate'];
                    userUUID = searchHisMeetingsRequest['userUUID'];
                    offset = searchHisMeetingsRequest['offset'];
                    limit = searchHisMeetingsRequest['limit'];
                    searchKey = searchHisMeetingsRequest['searchKey'];
                    queryAll = searchHisMeetingsRequest['queryAll'];
                    sortType = searchHisMeetingsRequest['sortType'];
                    xAuthorizationType = searchHisMeetingsRequest['X-Authorization-Type'];
                    xSiteId = searchHisMeetingsRequest['X-Site-Id'];
                }
            }

        
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling searchHisMeetings.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling searchHisMeetings.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (queryAll !== null && queryAll !== undefined) {
                localVarQueryParameter['queryAll'] = queryAll;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sortType'] = sortType;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询信息窗素材。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchMaterials(searchMaterialsRequest?: SearchMaterialsRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/sss/materials",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchMaterialsRequest !== null && searchMaterialsRequest !== undefined) {
                if (searchMaterialsRequest instanceof SearchMaterialsRequest) {
                    xRequestId = searchMaterialsRequest.xRequestId;
                    acceptLanguage = searchMaterialsRequest.acceptLanguage;
                    offset = searchMaterialsRequest.offset;
                    limit = searchMaterialsRequest.limit;
                    searchKey = searchMaterialsRequest.searchKey;
                } else {
                    xRequestId = searchMaterialsRequest['X-Request-Id'];
                    acceptLanguage = searchMaterialsRequest['Accept-Language'];
                    offset = searchMaterialsRequest['offset'];
                    limit = searchMaterialsRequest['limit'];
                    searchKey = searchMaterialsRequest['searchKey'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户查询自己的会议纪要列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchMeetingFileList(searchMeetingFileListRequest?: SearchMeetingFileListRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/sss/meeting-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchMeetingFileListRequest !== null && searchMeetingFileListRequest !== undefined) {
                if (searchMeetingFileListRequest instanceof SearchMeetingFileListRequest) {
                    xRequestId = searchMeetingFileListRequest.xRequestId;
                    acceptLanguage = searchMeetingFileListRequest.acceptLanguage;
                    offset = searchMeetingFileListRequest.offset;
                    limit = searchMeetingFileListRequest.limit;
                    searchKey = searchMeetingFileListRequest.searchKey;
                } else {
                    xRequestId = searchMeetingFileListRequest['X-Request-Id'];
                    acceptLanguage = searchMeetingFileListRequest['Accept-Language'];
                    offset = searchMeetingFileListRequest['offset'];
                    limit = searchMeetingFileListRequest['limit'];
                    searchKey = searchMeetingFileListRequest['searchKey'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询尚未结束的会议。
         * * 管理员可以查询管理权限域内所有的会议，普通用户仅能查询自己创建或者需要参加的会议。不带查询参数时，默认查询权限范围内正在召开或还未召开的会议。
         * * 只能查询尚未结束的会议（既正在召开的会议和已预约还未召开的会议）。如果需要查询历史会议列表，请参考[[查询历史会议列表](https://support.huaweicloud.com/api-meeting/meeting_21_0051.html)](tag:hws)[[查询历史会议列表](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0051.html)](tag:hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchMeetings(searchMeetingsRequest?: SearchMeetingsRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userUUID;
            
            let offset;
            
            let limit;
            
            let queryAll;
            
            let searchKey;
            
            let queryConfMode;
            
            let sortType;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (searchMeetingsRequest !== null && searchMeetingsRequest !== undefined) {
                if (searchMeetingsRequest instanceof SearchMeetingsRequest) {
                    userUUID = searchMeetingsRequest.userUUID;
                    offset = searchMeetingsRequest.offset;
                    limit = searchMeetingsRequest.limit;
                    queryAll = searchMeetingsRequest.queryAll;
                    searchKey = searchMeetingsRequest.searchKey;
                    queryConfMode = searchMeetingsRequest.queryConfMode;
                    sortType = searchMeetingsRequest.sortType;
                    xAuthorizationType = searchMeetingsRequest.xAuthorizationType;
                    xSiteId = searchMeetingsRequest.xSiteId;
                } else {
                    userUUID = searchMeetingsRequest['userUUID'];
                    offset = searchMeetingsRequest['offset'];
                    limit = searchMeetingsRequest['limit'];
                    queryAll = searchMeetingsRequest['queryAll'];
                    searchKey = searchMeetingsRequest['searchKey'];
                    queryConfMode = searchMeetingsRequest['queryConfMode'];
                    sortType = searchMeetingsRequest['sortType'];
                    xAuthorizationType = searchMeetingsRequest['X-Authorization-Type'];
                    xSiteId = searchMeetingsRequest['X-Site-Id'];
                }
            }

        
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (queryAll !== null && queryAll !== undefined) {
                localVarQueryParameter['queryAll'] = queryAll;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (queryConfMode !== null && queryConfMode !== undefined) {
                localVarQueryParameter['queryConfMode'] = queryConfMode;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sortType'] = sortType;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业用户通过该接口查询个人已分配的云会议室及个人会议ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchMemberVmr(searchMemberVmrRequest?: SearchMemberVmrRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/member/vmr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let specialVmr;

            if (searchMemberVmrRequest !== null && searchMemberVmrRequest !== undefined) {
                if (searchMemberVmrRequest instanceof SearchMemberVmrRequest) {
                    xRequestId = searchMemberVmrRequest.xRequestId;
                    acceptLanguage = searchMemberVmrRequest.acceptLanguage;
                    offset = searchMemberVmrRequest.offset;
                    limit = searchMemberVmrRequest.limit;
                    searchKey = searchMemberVmrRequest.searchKey;
                    specialVmr = searchMemberVmrRequest.specialVmr;
                } else {
                    xRequestId = searchMemberVmrRequest['X-Request-Id'];
                    acceptLanguage = searchMemberVmrRequest['Accept-Language'];
                    offset = searchMemberVmrRequest['offset'];
                    limit = searchMemberVmrRequest['limit'];
                    searchKey = searchMemberVmrRequest['searchKey'];
                    specialVmr = searchMemberVmrRequest['specialVmr'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (specialVmr !== null && specialVmr !== undefined) {
                localVarQueryParameter['specialVmr'] = specialVmr;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询正在召开的会议列表。管理员可以查询本企业内所有在线会议，普通用户仅能查询当前自己帐号创建或者需要参加的在线会议。不带查询参数时，默认查询权限范围内的在线会议，按开始时间升序排列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchOnlineMeetings(searchOnlineMeetingsRequest?: SearchOnlineMeetingsRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/online",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userUUID;
            
            let offset;
            
            let limit;
            
            let queryAll;
            
            let searchKey;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (searchOnlineMeetingsRequest !== null && searchOnlineMeetingsRequest !== undefined) {
                if (searchOnlineMeetingsRequest instanceof SearchOnlineMeetingsRequest) {
                    userUUID = searchOnlineMeetingsRequest.userUUID;
                    offset = searchOnlineMeetingsRequest.offset;
                    limit = searchOnlineMeetingsRequest.limit;
                    queryAll = searchOnlineMeetingsRequest.queryAll;
                    searchKey = searchOnlineMeetingsRequest.searchKey;
                    xAuthorizationType = searchOnlineMeetingsRequest.xAuthorizationType;
                    xSiteId = searchOnlineMeetingsRequest.xSiteId;
                } else {
                    userUUID = searchOnlineMeetingsRequest['userUUID'];
                    offset = searchOnlineMeetingsRequest['offset'];
                    limit = searchOnlineMeetingsRequest['limit'];
                    queryAll = searchOnlineMeetingsRequest['queryAll'];
                    searchKey = searchOnlineMeetingsRequest['searchKey'];
                    xAuthorizationType = searchOnlineMeetingsRequest['X-Authorization-Type'];
                    xSiteId = searchOnlineMeetingsRequest['X-Site-Id'];
                }
            }

        
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (queryAll !== null && queryAll !== undefined) {
                localVarQueryParameter['queryAll'] = queryAll;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取信息窗节目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchPrograms(searchProgramsRequest?: SearchProgramsRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/sss/programs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchProgramsRequest !== null && searchProgramsRequest !== undefined) {
                if (searchProgramsRequest instanceof SearchProgramsRequest) {
                    xRequestId = searchProgramsRequest.xRequestId;
                    acceptLanguage = searchProgramsRequest.acceptLanguage;
                    offset = searchProgramsRequest.offset;
                    limit = searchProgramsRequest.limit;
                    searchKey = searchProgramsRequest.searchKey;
                } else {
                    xRequestId = searchProgramsRequest['X-Request-Id'];
                    acceptLanguage = searchProgramsRequest['Accept-Language'];
                    offset = searchProgramsRequest['offset'];
                    limit = searchProgramsRequest['limit'];
                    searchKey = searchProgramsRequest['searchKey'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取信息窗发布。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchPublications(searchPublicationsRequest?: SearchPublicationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/sss/publications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchPublicationsRequest !== null && searchPublicationsRequest !== undefined) {
                if (searchPublicationsRequest instanceof SearchPublicationsRequest) {
                    xRequestId = searchPublicationsRequest.xRequestId;
                    acceptLanguage = searchPublicationsRequest.acceptLanguage;
                    offset = searchPublicationsRequest.offset;
                    limit = searchPublicationsRequest.limit;
                    searchKey = searchPublicationsRequest.searchKey;
                } else {
                    xRequestId = searchPublicationsRequest['X-Request-Id'];
                    acceptLanguage = searchPublicationsRequest['Accept-Language'];
                    offset = searchPublicationsRequest['offset'];
                    limit = searchPublicationsRequest['limit'];
                    searchKey = searchPublicationsRequest['searchKey'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询会议录制列表。管理员可以查询本企业内所有的录制，普通用户仅能查询自己创建的会议的录制。不带查询参数时，默认查询权限范围内的录制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchRecordings(searchRecordingsRequest?: SearchRecordingsRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/record/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startDate;
            
            let endDate;
            
            let userUUID;
            
            let offset;
            
            let limit;
            
            let queryAll;
            
            let searchKey;
            
            let sortType;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (searchRecordingsRequest !== null && searchRecordingsRequest !== undefined) {
                if (searchRecordingsRequest instanceof SearchRecordingsRequest) {
                    startDate = searchRecordingsRequest.startDate;
                    endDate = searchRecordingsRequest.endDate;
                    userUUID = searchRecordingsRequest.userUUID;
                    offset = searchRecordingsRequest.offset;
                    limit = searchRecordingsRequest.limit;
                    queryAll = searchRecordingsRequest.queryAll;
                    searchKey = searchRecordingsRequest.searchKey;
                    sortType = searchRecordingsRequest.sortType;
                    xAuthorizationType = searchRecordingsRequest.xAuthorizationType;
                    xSiteId = searchRecordingsRequest.xSiteId;
                } else {
                    startDate = searchRecordingsRequest['startDate'];
                    endDate = searchRecordingsRequest['endDate'];
                    userUUID = searchRecordingsRequest['userUUID'];
                    offset = searchRecordingsRequest['offset'];
                    limit = searchRecordingsRequest['limit'];
                    queryAll = searchRecordingsRequest['queryAll'];
                    searchKey = searchRecordingsRequest['searchKey'];
                    sortType = searchRecordingsRequest['sortType'];
                    xAuthorizationType = searchRecordingsRequest['X-Authorization-Type'];
                    xSiteId = searchRecordingsRequest['X-Site-Id'];
                }
            }

        
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling searchRecordings.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling searchRecordings.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (queryAll !== null && queryAll !== undefined) {
                localVarQueryParameter['queryAll'] = queryAll;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sortType'] = sortType;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SP根据条件查询企业的资源项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchResource(searchResourceRequest?: SearchResourceRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/sp/corp/{corp_id}/resource",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let corpId;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let startExpireDate;
            
            let endExpireDate;
            
            let type;
            
            let typeId;
            
            let status;

            if (searchResourceRequest !== null && searchResourceRequest !== undefined) {
                if (searchResourceRequest instanceof SearchResourceRequest) {
                    corpId = searchResourceRequest.corpId;
                    xRequestId = searchResourceRequest.xRequestId;
                    acceptLanguage = searchResourceRequest.acceptLanguage;
                    offset = searchResourceRequest.offset;
                    limit = searchResourceRequest.limit;
                    searchKey = searchResourceRequest.searchKey;
                    startExpireDate = searchResourceRequest.startExpireDate;
                    endExpireDate = searchResourceRequest.endExpireDate;
                    type = searchResourceRequest.type;
                    typeId = searchResourceRequest.typeId;
                    status = searchResourceRequest.status;
                } else {
                    corpId = searchResourceRequest['corp_id'];
                    xRequestId = searchResourceRequest['X-Request-Id'];
                    acceptLanguage = searchResourceRequest['Accept-Language'];
                    offset = searchResourceRequest['offset'];
                    limit = searchResourceRequest['limit'];
                    searchKey = searchResourceRequest['searchKey'];
                    startExpireDate = searchResourceRequest['startExpireDate'];
                    endExpireDate = searchResourceRequest['endExpireDate'];
                    type = searchResourceRequest['type'];
                    typeId = searchResourceRequest['typeId'];
                    status = searchResourceRequest['status'];
                }
            }

        
            if (corpId === null || corpId === undefined) {
            throw new RequiredError('corpId','Required parameter corpId was null or undefined when calling searchResource.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (startExpireDate !== null && startExpireDate !== undefined) {
                localVarQueryParameter['startExpireDate'] = startExpireDate;
            }
            if (endExpireDate !== null && endExpireDate !== undefined) {
                localVarQueryParameter['endExpireDate'] = endExpireDate;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (typeId !== null && typeId !== undefined) {
                localVarQueryParameter['typeId'] = typeId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'corp_id': corpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SP根据根据条件查询企业的资源操作记录，支持根据resourceId模糊搜索。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchResourceOpRecord(searchResourceOpRecordRequest?: SearchResourceOpRecordRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/sp/corp/{corp_id}/resource-record",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let corpId;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let startExpireDate;
            
            let endExpireDate;
            
            let startOperateDate;
            
            let endOperateDate;
            
            let type;
            
            let typeId;
            
            let operateType;

            if (searchResourceOpRecordRequest !== null && searchResourceOpRecordRequest !== undefined) {
                if (searchResourceOpRecordRequest instanceof SearchResourceOpRecordRequest) {
                    corpId = searchResourceOpRecordRequest.corpId;
                    xRequestId = searchResourceOpRecordRequest.xRequestId;
                    acceptLanguage = searchResourceOpRecordRequest.acceptLanguage;
                    offset = searchResourceOpRecordRequest.offset;
                    limit = searchResourceOpRecordRequest.limit;
                    searchKey = searchResourceOpRecordRequest.searchKey;
                    startExpireDate = searchResourceOpRecordRequest.startExpireDate;
                    endExpireDate = searchResourceOpRecordRequest.endExpireDate;
                    startOperateDate = searchResourceOpRecordRequest.startOperateDate;
                    endOperateDate = searchResourceOpRecordRequest.endOperateDate;
                    type = searchResourceOpRecordRequest.type;
                    typeId = searchResourceOpRecordRequest.typeId;
                    operateType = searchResourceOpRecordRequest.operateType;
                } else {
                    corpId = searchResourceOpRecordRequest['corp_id'];
                    xRequestId = searchResourceOpRecordRequest['X-Request-Id'];
                    acceptLanguage = searchResourceOpRecordRequest['Accept-Language'];
                    offset = searchResourceOpRecordRequest['offset'];
                    limit = searchResourceOpRecordRequest['limit'];
                    searchKey = searchResourceOpRecordRequest['searchKey'];
                    startExpireDate = searchResourceOpRecordRequest['startExpireDate'];
                    endExpireDate = searchResourceOpRecordRequest['endExpireDate'];
                    startOperateDate = searchResourceOpRecordRequest['startOperateDate'];
                    endOperateDate = searchResourceOpRecordRequest['endOperateDate'];
                    type = searchResourceOpRecordRequest['type'];
                    typeId = searchResourceOpRecordRequest['typeId'];
                    operateType = searchResourceOpRecordRequest['operateType'];
                }
            }

        
            if (corpId === null || corpId === undefined) {
            throw new RequiredError('corpId','Required parameter corpId was null or undefined when calling searchResourceOpRecord.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (startExpireDate !== null && startExpireDate !== undefined) {
                localVarQueryParameter['startExpireDate'] = startExpireDate;
            }
            if (endExpireDate !== null && endExpireDate !== undefined) {
                localVarQueryParameter['endExpireDate'] = endExpireDate;
            }
            if (startOperateDate !== null && startOperateDate !== undefined) {
                localVarQueryParameter['startOperateDate'] = startOperateDate;
            }
            if (endOperateDate !== null && endOperateDate !== undefined) {
                localVarQueryParameter['endOperateDate'] = endOperateDate;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (typeId !== null && typeId !== undefined) {
                localVarQueryParameter['typeId'] = typeId;
            }
            if (operateType !== null && operateType !== undefined) {
                localVarQueryParameter['operateType'] = operateType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'corp_id': corpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口分页查询企业用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchUsers(searchUsersRequest?: SearchUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/member",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let sortField;
            
            let isAsc;
            
            let deptCode;
            
            let enableSubDept;
            
            let adminType;
            
            let enableRoom;
            
            let userType;
            
            let status;
            
            let containsUnActive;

            if (searchUsersRequest !== null && searchUsersRequest !== undefined) {
                if (searchUsersRequest instanceof SearchUsersRequest) {
                    xRequestId = searchUsersRequest.xRequestId;
                    acceptLanguage = searchUsersRequest.acceptLanguage;
                    offset = searchUsersRequest.offset;
                    limit = searchUsersRequest.limit;
                    searchKey = searchUsersRequest.searchKey;
                    sortField = searchUsersRequest.sortField;
                    isAsc = searchUsersRequest.isAsc;
                    deptCode = searchUsersRequest.deptCode;
                    enableSubDept = searchUsersRequest.enableSubDept;
                    adminType = searchUsersRequest.adminType;
                    enableRoom = searchUsersRequest.enableRoom;
                    userType = searchUsersRequest.userType;
                    status = searchUsersRequest.status;
                    containsUnActive = searchUsersRequest.containsUnActive;
                } else {
                    xRequestId = searchUsersRequest['X-Request-Id'];
                    acceptLanguage = searchUsersRequest['Accept-Language'];
                    offset = searchUsersRequest['offset'];
                    limit = searchUsersRequest['limit'];
                    searchKey = searchUsersRequest['searchKey'];
                    sortField = searchUsersRequest['sortField'];
                    isAsc = searchUsersRequest['isAsc'];
                    deptCode = searchUsersRequest['deptCode'];
                    enableSubDept = searchUsersRequest['enableSubDept'];
                    adminType = searchUsersRequest['adminType'];
                    enableRoom = searchUsersRequest['enableRoom'];
                    userType = searchUsersRequest['userType'];
                    status = searchUsersRequest['status'];
                    containsUnActive = searchUsersRequest['containsUnActive'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sortField'] = sortField;
            }
            if (isAsc !== null && isAsc !== undefined) {
                localVarQueryParameter['isAsc'] = isAsc;
            }
            if (deptCode !== null && deptCode !== undefined) {
                localVarQueryParameter['deptCode'] = deptCode;
            }
            if (enableSubDept !== null && enableSubDept !== undefined) {
                localVarQueryParameter['enableSubDept'] = enableSubDept;
            }
            if (adminType !== null && adminType !== undefined) {
                localVarQueryParameter['adminType'] = adminType;
            }
            if (enableRoom !== null && enableRoom !== undefined) {
                localVarQueryParameter['enableRoom'] = enableRoom;
            }
            if (userType !== null && userType !== undefined) {
                localVarQueryParameter['userType'] = userType;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (containsUnActive !== null && containsUnActive !== undefined) {
                localVarQueryParameter['containsUnActive'] = containsUnActive;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员分页查询激活码，支持激活码、终端名称模糊查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchVisionActiveCode(searchVisionActiveCodeRequest?: SearchVisionActiveCodeRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/vision/activecode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let devType;

            if (searchVisionActiveCodeRequest !== null && searchVisionActiveCodeRequest !== undefined) {
                if (searchVisionActiveCodeRequest instanceof SearchVisionActiveCodeRequest) {
                    xRequestId = searchVisionActiveCodeRequest.xRequestId;
                    acceptLanguage = searchVisionActiveCodeRequest.acceptLanguage;
                    offset = searchVisionActiveCodeRequest.offset;
                    limit = searchVisionActiveCodeRequest.limit;
                    searchKey = searchVisionActiveCodeRequest.searchKey;
                    devType = searchVisionActiveCodeRequest.devType;
                } else {
                    xRequestId = searchVisionActiveCodeRequest['X-Request-Id'];
                    acceptLanguage = searchVisionActiveCodeRequest['Accept-Language'];
                    offset = searchVisionActiveCodeRequest['offset'];
                    limit = searchVisionActiveCodeRequest['limit'];
                    searchKey = searchVisionActiveCodeRequest['searchKey'];
                    devType = searchVisionActiveCodeRequest['devType'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (devType !== null && devType !== undefined) {
                localVarQueryParameter['devType'] = devType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口提供发送滑块验证码。服务器收到请求，返回抠图以及抠图后的原图等结果。需要在前台界面显示出抠图以及抠图后的原图，用户通过滑块操作来匹配图形。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendSlideVerifyCode(sendSlideVerifyCodeRequest?: SendSlideVerifyCodeRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/acs/auth/slideverifycode/send",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (sendSlideVerifyCodeRequest !== null && sendSlideVerifyCodeRequest !== undefined) {
                if (sendSlideVerifyCodeRequest instanceof SendSlideVerifyCodeRequest) {
                    body = sendSlideVerifyCodeRequest.body
                    xRequestID = sendSlideVerifyCodeRequest.xRequestID;
                    acceptLanguage = sendSlideVerifyCodeRequest.acceptLanguage;
                } else {
                    body = sendSlideVerifyCodeRequest['body'];
                    xRequestID = sendSlideVerifyCodeRequest['X-Request-ID'];
                    acceptLanguage = sendSlideVerifyCodeRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口提供发送验证码，服务器收到请求，发送验证码到邮箱或者短信并返回结果。用户在前台界面通过滑块验证后，再进行发送验证码操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendVeriCodeForChangePwd(sendVeriCodeForChangePwdRequest?: SendVeriCodeForChangePwdRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/acs/verifycode/send",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (sendVeriCodeForChangePwdRequest !== null && sendVeriCodeForChangePwdRequest !== undefined) {
                if (sendVeriCodeForChangePwdRequest instanceof SendVeriCodeForChangePwdRequest) {
                    body = sendVeriCodeForChangePwdRequest.body
                    xRequestID = sendVeriCodeForChangePwdRequest.xRequestID;
                    acceptLanguage = sendVeriCodeForChangePwdRequest.acceptLanguage;
                } else {
                    body = sendVeriCodeForChangePwdRequest['body'];
                    xRequestID = sendVeriCodeForChangePwdRequest['X-Request-ID'];
                    acceptLanguage = sendVeriCodeForChangePwdRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改用户手机或邮箱时，需要获取验证码。企业用户通过该接口获取验证码，系统会向用户的手机或邮箱发送，验证码1分钟内有效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendVeriCodeForUpdateUserInfo(sendVeriCodeForUpdateUserInfoRequest?: SendVeriCodeForUpdateUserInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/dcs/member/verification-code",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (sendVeriCodeForUpdateUserInfoRequest !== null && sendVeriCodeForUpdateUserInfoRequest !== undefined) {
                if (sendVeriCodeForUpdateUserInfoRequest instanceof SendVeriCodeForUpdateUserInfoRequest) {
                    body = sendVeriCodeForUpdateUserInfoRequest.body
                    xRequestId = sendVeriCodeForUpdateUserInfoRequest.xRequestId;
                    acceptLanguage = sendVeriCodeForUpdateUserInfoRequest.acceptLanguage;
                } else {
                    body = sendVeriCodeForUpdateUserInfoRequest['body'];
                    xRequestId = sendVeriCodeForUpdateUserInfoRequest['X-Request-Id'];
                    acceptLanguage = sendVeriCodeForUpdateUserInfoRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 主持人通过该接口设置某些普通与会者(包括主持人)加入哪个语言频道。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAttendeeLanChannel(setAttendeeLanChannelRequest?: SetAttendeeLanChannelRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/setAttendeeLanChannel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (setAttendeeLanChannelRequest !== null && setAttendeeLanChannelRequest !== undefined) {
                if (setAttendeeLanChannelRequest instanceof SetAttendeeLanChannelRequest) {
                    conferenceID = setAttendeeLanChannelRequest.conferenceID;
                    xConferenceAuthorization = setAttendeeLanChannelRequest.xConferenceAuthorization;
                    body = setAttendeeLanChannelRequest.body
                } else {
                    conferenceID = setAttendeeLanChannelRequest['conferenceID'];
                    xConferenceAuthorization = setAttendeeLanChannelRequest['X-Conference-Authorization'];
                    body = setAttendeeLanChannelRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling setAttendeeLanChannel.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置联席主持人或释放联席主持人。只能将来宾设置为联席主持人。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setCohost(setCohostRequest?: SetCohostRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/cohost",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (setCohostRequest !== null && setCohostRequest !== undefined) {
                if (setCohostRequest instanceof SetCohostRequest) {
                    conferenceID = setCohostRequest.conferenceID;
                    participantID = setCohostRequest.participantID;
                    xConferenceAuthorization = setCohostRequest.xConferenceAuthorization;
                    body = setCohostRequest.body
                } else {
                    conferenceID = setCohostRequest['conferenceID'];
                    participantID = setCohostRequest['participantID'];
                    xConferenceAuthorization = setCohostRequest['X-Conference-Authorization'];
                    body = setCohostRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling setCohost.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling setCohost.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置会中多画面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setCustomMultiPicture(setCustomMultiPictureRequest?: SetCustomMultiPictureRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/display/customMultiPicture",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (setCustomMultiPictureRequest !== null && setCustomMultiPictureRequest !== undefined) {
                if (setCustomMultiPictureRequest instanceof SetCustomMultiPictureRequest) {
                    conferenceID = setCustomMultiPictureRequest.conferenceID;
                    xConferenceAuthorization = setCustomMultiPictureRequest.xConferenceAuthorization;
                    body = setCustomMultiPictureRequest.body
                } else {
                    conferenceID = setCustomMultiPictureRequest['conferenceID'];
                    xConferenceAuthorization = setCustomMultiPictureRequest['X-Conference-Authorization'];
                    body = setCustomMultiPictureRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling setCustomMultiPicture.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于主持人轮询、主持人选看多画面、主持人选看会场操作。只适用于专业会议终端（如TE系列等）为主持人的场景。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setHostView(setHostViewRequest?: SetHostViewRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/chairView",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (setHostViewRequest !== null && setHostViewRequest !== undefined) {
                if (setHostViewRequest instanceof SetHostViewRequest) {
                    conferenceID = setHostViewRequest.conferenceID;
                    xConferenceAuthorization = setHostViewRequest.xConferenceAuthorization;
                    body = setHostViewRequest.body
                } else {
                    conferenceID = setHostViewRequest['conferenceID'];
                    xConferenceAuthorization = setHostViewRequest['X-Conference-Authorization'];
                    body = setHostViewRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling setHostView.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 主持人通过该接口设置传译组，每个传译组支持两种语言，传译组内支持多个传译员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setInterpreterGroup(setInterpreterGroupRequest?: SetInterpreterGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/interpreterGroup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (setInterpreterGroupRequest !== null && setInterpreterGroupRequest !== undefined) {
                if (setInterpreterGroupRequest instanceof SetInterpreterGroupRequest) {
                    conferenceID = setInterpreterGroupRequest.conferenceID;
                    xConferenceAuthorization = setInterpreterGroupRequest.xConferenceAuthorization;
                    body = setInterpreterGroupRequest.body
                } else {
                    conferenceID = setInterpreterGroupRequest['conferenceID'];
                    xConferenceAuthorization = setInterpreterGroupRequest['X-Conference-Authorization'];
                    body = setInterpreterGroupRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling setInterpreterGroup.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置会议多画面。该接口废弃不用，请使用“[[设置自定义多画面](https://support.huaweicloud.com/api-meeting/meeting_21_0418.html)](tag:hws)[[设置自定义多画面](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0418.html)](tag:hk)”接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setMultiPicture(setMultiPictureRequest?: SetMultiPictureRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/display/multiPicture",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (setMultiPictureRequest !== null && setMultiPictureRequest !== undefined) {
                if (setMultiPictureRequest instanceof SetMultiPictureRequest) {
                    conferenceID = setMultiPictureRequest.conferenceID;
                    xConferenceAuthorization = setMultiPictureRequest.xConferenceAuthorization;
                    body = setMultiPictureRequest.body
                } else {
                    conferenceID = setMultiPictureRequest['conferenceID'];
                    xConferenceAuthorization = setMultiPictureRequest['X-Conference-Authorization'];
                    body = setMultiPictureRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling setMultiPicture.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于专业会议终端（如TE系列等）选看其他与会者。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setParticipantView(setParticipantViewRequest?: SetParticipantViewRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/partView",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (setParticipantViewRequest !== null && setParticipantViewRequest !== undefined) {
                if (setParticipantViewRequest instanceof SetParticipantViewRequest) {
                    conferenceID = setParticipantViewRequest.conferenceID;
                    participantID = setParticipantViewRequest.participantID;
                    xConferenceAuthorization = setParticipantViewRequest.xConferenceAuthorization;
                    body = setParticipantViewRequest.body
                } else {
                    conferenceID = setParticipantViewRequest['conferenceID'];
                    participantID = setParticipantViewRequest['participantID'];
                    xConferenceAuthorization = setParticipantViewRequest['X-Conference-Authorization'];
                    body = setParticipantViewRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling setParticipantView.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling setParticipantView.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置主持人或释放主持人。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRole(setRoleRequest?: SetRoleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/participants/role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let participantID;
            
            let xConferenceAuthorization;

            if (setRoleRequest !== null && setRoleRequest !== undefined) {
                if (setRoleRequest instanceof SetRoleRequest) {
                    conferenceID = setRoleRequest.conferenceID;
                    participantID = setRoleRequest.participantID;
                    xConferenceAuthorization = setRoleRequest.xConferenceAuthorization;
                    body = setRoleRequest.body
                } else {
                    conferenceID = setRoleRequest['conferenceID'];
                    participantID = setRoleRequest['participantID'];
                    xConferenceAuthorization = setRoleRequest['X-Conference-Authorization'];
                    body = setRoleRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling setRole.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling setRole.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置SSO登录的鉴权配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSsoConfig(setSsoConfigRequest?: SetSsoConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/acs/authorizeconfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (setSsoConfigRequest !== null && setSsoConfigRequest !== undefined) {
                if (setSsoConfigRequest instanceof SetSsoConfigRequest) {
                    body = setSsoConfigRequest.body
                    xRequestId = setSsoConfigRequest.xRequestId;
                    acceptLanguage = setSsoConfigRequest.acceptLanguage;
                } else {
                    body = setSsoConfigRequest['body'];
                    xRequestId = setSsoConfigRequest['X-Request-Id'];
                    acceptLanguage = setSsoConfigRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于管理员设置企业级会议事件订阅配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setWebHookConfig(setWebHookConfigRequest?: SetWebHookConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/mmc/management/webhook/link-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setWebHookConfigRequest !== null && setWebHookConfigRequest !== undefined) {
                if (setWebHookConfigRequest instanceof SetWebHookConfigRequest) {
                    body = setWebHookConfigRequest.body
                } else {
                    body = setWebHookConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SP管理员根据会议ID查询该会议归属的企业ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfOrg(showConfOrgRequest?: ShowConfOrgRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/confOrg",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;

            if (showConfOrgRequest !== null && showConfOrgRequest !== undefined) {
                if (showConfOrgRequest instanceof ShowConfOrgRequest) {
                    conferenceID = showConfOrgRequest.conferenceID;
                } else {
                    conferenceID = showConfOrgRequest['conferenceID'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling showConfOrg.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取企业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCorp(showCorpRequest?: ShowCorpRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/sp/corp/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showCorpRequest !== null && showCorpRequest !== undefined) {
                if (showCorpRequest instanceof ShowCorpRequest) {
                    id = showCorpRequest.id;
                    xRequestId = showCorpRequest.xRequestId;
                    acceptLanguage = showCorpRequest.acceptLanguage;
                } else {
                    id = showCorpRequest['id'];
                    xRequestId = showCorpRequest['X-Request-Id'];
                    acceptLanguage = showCorpRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCorp.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过该接口查询企业管理员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCorpAdmin(showCorpAdminRequest?: ShowCorpAdminRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/admin/{account}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let account;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (showCorpAdminRequest !== null && showCorpAdminRequest !== undefined) {
                if (showCorpAdminRequest instanceof ShowCorpAdminRequest) {
                    account = showCorpAdminRequest.account;
                    xRequestId = showCorpAdminRequest.xRequestId;
                    acceptLanguage = showCorpAdminRequest.acceptLanguage;
                    accountType = showCorpAdminRequest.accountType;
                } else {
                    account = showCorpAdminRequest['account'];
                    xRequestId = showCorpAdminRequest['X-Request-Id'];
                    acceptLanguage = showCorpAdminRequest['Accept-Language'];
                    accountType = showCorpAdminRequest['accountType'];
                }
            }

        
            if (account === null || account === undefined) {
            throw new RequiredError('account','Required parameter account was null or undefined when calling showCorpAdmin.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'account': account, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口查询企业注册信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCorpBasicInfo(showCorpBasicInfoRequest?: ShowCorpBasicInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRequestId;
            
            let acceptLanguage;

            if (showCorpBasicInfoRequest !== null && showCorpBasicInfoRequest !== undefined) {
                if (showCorpBasicInfoRequest instanceof ShowCorpBasicInfoRequest) {
                    xRequestId = showCorpBasicInfoRequest.xRequestId;
                    acceptLanguage = showCorpBasicInfoRequest.acceptLanguage;
                } else {
                    xRequestId = showCorpBasicInfoRequest['X-Request-Id'];
                    acceptLanguage = showCorpBasicInfoRequest['Accept-Language'];
                }
            }

        
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口查询企业内资源及业务权限，包括查询已使用的资源情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCorpResource(showCorpResourceRequest?: ShowCorpResourceRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/resource",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRequestId;
            
            let acceptLanguage;

            if (showCorpResourceRequest !== null && showCorpResourceRequest !== undefined) {
                if (showCorpResourceRequest instanceof ShowCorpResourceRequest) {
                    xRequestId = showCorpResourceRequest.xRequestId;
                    acceptLanguage = showCorpResourceRequest.acceptLanguage;
                } else {
                    xRequestId = showCorpResourceRequest['X-Request-Id'];
                    acceptLanguage = showCorpResourceRequest['Accept-Language'];
                }
            }

        
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过部门编码查询部门信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDepartment(showDepartmentRequest?: ShowDepartmentRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/abs/departments/{dept_code}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deptCode;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showDepartmentRequest !== null && showDepartmentRequest !== undefined) {
                if (showDepartmentRequest instanceof ShowDepartmentRequest) {
                    deptCode = showDepartmentRequest.deptCode;
                    xRequestId = showDepartmentRequest.xRequestId;
                    acceptLanguage = showDepartmentRequest.acceptLanguage;
                } else {
                    deptCode = showDepartmentRequest['dept_code'];
                    xRequestId = showDepartmentRequest['X-Request-Id'];
                    acceptLanguage = showDepartmentRequest['Accept-Language'];
                }
            }

        
            if (deptCode === null || deptCode === undefined) {
            throw new RequiredError('deptCode','Required parameter deptCode was null or undefined when calling showDepartment.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'dept_code': deptCode, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口查询部门及其一级子部门列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeptAndChildDept(showDeptAndChildDeptRequest?: ShowDeptAndChildDeptRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/member/dept/{dept_code}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deptCode;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showDeptAndChildDeptRequest !== null && showDeptAndChildDeptRequest !== undefined) {
                if (showDeptAndChildDeptRequest instanceof ShowDeptAndChildDeptRequest) {
                    deptCode = showDeptAndChildDeptRequest.deptCode;
                    xRequestId = showDeptAndChildDeptRequest.xRequestId;
                    acceptLanguage = showDeptAndChildDeptRequest.acceptLanguage;
                } else {
                    deptCode = showDeptAndChildDeptRequest['dept_code'];
                    xRequestId = showDeptAndChildDeptRequest['X-Request-Id'];
                    acceptLanguage = showDeptAndChildDeptRequest['Accept-Language'];
                }
            }

        
            if (deptCode === null || deptCode === undefined) {
            throw new RequiredError('deptCode','Required parameter deptCode was null or undefined when calling showDeptAndChildDept.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'dept_code': deptCode, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口查询专业会议终端详情。
         * &gt; 如果需要查询Ideahub、SmartRooms、智慧屏TV详情请使用[[查询用户详情](https://support.huaweicloud.com/api-meeting/meeting_21_0069.html)](tag:hws)[[查询用户详情](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0069.html)](tag:hk)接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeviceDetail(showDeviceDetailRequest?: ShowDeviceDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/device/{sn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let sn;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showDeviceDetailRequest !== null && showDeviceDetailRequest !== undefined) {
                if (showDeviceDetailRequest instanceof ShowDeviceDetailRequest) {
                    sn = showDeviceDetailRequest.sn;
                    xRequestId = showDeviceDetailRequest.xRequestId;
                    acceptLanguage = showDeviceDetailRequest.acceptLanguage;
                } else {
                    sn = showDeviceDetailRequest['sn'];
                    xRequestId = showDeviceDetailRequest['X-Request-Id'];
                    acceptLanguage = showDeviceDetailRequest['Accept-Language'];
                }
            }

        
            if (sn === null || sn === undefined) {
            throw new RequiredError('sn','Required parameter sn was null or undefined when calling showDeviceDetail.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'sn': sn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用本接口可以查询硬终端的状态。
         * 硬终端与发起查询请求的帐号需在同一企业下，否则会鉴权失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeviceStatus(showDeviceStatusRequest?: ShowDeviceStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/acs/ap/userstatus",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (showDeviceStatusRequest !== null && showDeviceStatusRequest !== undefined) {
                if (showDeviceStatusRequest instanceof ShowDeviceStatusRequest) {
                    body = showDeviceStatusRequest.body
                    xRequestID = showDeviceStatusRequest.xRequestID;
                    acceptLanguage = showDeviceStatusRequest.acceptLanguage;
                } else {
                    body = showDeviceStatusRequest['body'];
                    xRequestID = showDeviceStatusRequest['X-Request-ID'];
                    acceptLanguage = showDeviceStatusRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口获取所有的专业会议终端类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeviceTypes(showDeviceTypesRequest?: ShowDeviceTypesRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/termdevtype",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRequestId;
            
            let acceptLanguage;

            if (showDeviceTypesRequest !== null && showDeviceTypesRequest !== undefined) {
                if (showDeviceTypesRequest instanceof ShowDeviceTypesRequest) {
                    xRequestId = showDeviceTypesRequest.xRequestId;
                    acceptLanguage = showDeviceTypesRequest.acceptLanguage;
                } else {
                    xRequestId = showDeviceTypesRequest['X-Request-Id'];
                    acceptLanguage = showDeviceTypesRequest['Accept-Language'];
                }
            }

        
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用户查询指定历史会议的详情。管理员可以查询本企业内所有的历史会议详情，普通用户仅能查询自己创建或者被邀请的历史会议详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHisMeetingDetail(showHisMeetingDetailRequest?: ShowHisMeetingDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/history/confDetail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let confUUID;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let userUUID;
            
            let xType;
            
            let xQueryType;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (showHisMeetingDetailRequest !== null && showHisMeetingDetailRequest !== undefined) {
                if (showHisMeetingDetailRequest instanceof ShowHisMeetingDetailRequest) {
                    confUUID = showHisMeetingDetailRequest.confUUID;
                    offset = showHisMeetingDetailRequest.offset;
                    limit = showHisMeetingDetailRequest.limit;
                    searchKey = showHisMeetingDetailRequest.searchKey;
                    userUUID = showHisMeetingDetailRequest.userUUID;
                    xType = showHisMeetingDetailRequest.xType;
                    xQueryType = showHisMeetingDetailRequest.xQueryType;
                    xAuthorizationType = showHisMeetingDetailRequest.xAuthorizationType;
                    xSiteId = showHisMeetingDetailRequest.xSiteId;
                } else {
                    confUUID = showHisMeetingDetailRequest['confUUID'];
                    offset = showHisMeetingDetailRequest['offset'];
                    limit = showHisMeetingDetailRequest['limit'];
                    searchKey = showHisMeetingDetailRequest['searchKey'];
                    userUUID = showHisMeetingDetailRequest['userUUID'];
                    xType = showHisMeetingDetailRequest['X-Type'];
                    xQueryType = showHisMeetingDetailRequest['X-Query-Type'];
                    xAuthorizationType = showHisMeetingDetailRequest['X-Authorization-Type'];
                    xSiteId = showHisMeetingDetailRequest['X-Site-Id'];
                }
            }

        
            if (confUUID === null || confUUID === undefined) {
                throw new RequiredError('confUUID','Required parameter confUUID was null or undefined when calling showHisMeetingDetail.');
            }
            if (confUUID !== null && confUUID !== undefined) {
                localVarQueryParameter['confUUID'] = confUUID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xType !== undefined && xType !== null) {
                localVarHeaderParameter['X-Type'] = String(xType);
            }
            if (xQueryType !== undefined && xQueryType !== null) {
                localVarHeaderParameter['X-Query-Type'] = String(xQueryType);
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询当前会议已保存的多画面布局。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLayout(showLayoutRequest?: ShowLayoutRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/control/conferences/layOut",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (showLayoutRequest !== null && showLayoutRequest !== undefined) {
                if (showLayoutRequest instanceof ShowLayoutRequest) {
                    conferenceID = showLayoutRequest.conferenceID;
                    xConferenceAuthorization = showLayoutRequest.xConferenceAuthorization;
                } else {
                    conferenceID = showLayoutRequest['conferenceID'];
                    xConferenceAuthorization = showLayoutRequest['X-Conference-Authorization'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling showLayout.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询偏移量
         * * 管理员可以查询管理权限域内所有会议的详情，普通用户仅能查询自己创建或者需要参加的会议详情。
         * * 只能查询尚未结束的会议（既正在召开的会议和已预约还未召开的会议）。如果需要查询历史会议列详情，请参考[[查询历史会议详情](https://support.huaweicloud.com/api-meeting/meeting_21_0052.html)](tag:hws)[[查询历史会议详情](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0052.html)](tag:hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMeetingDetail(showMeetingDetailRequest?: ShowMeetingDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/confDetail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let userUUID;
            
            let xType;
            
            let xQueryType;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (showMeetingDetailRequest !== null && showMeetingDetailRequest !== undefined) {
                if (showMeetingDetailRequest instanceof ShowMeetingDetailRequest) {
                    conferenceID = showMeetingDetailRequest.conferenceID;
                    offset = showMeetingDetailRequest.offset;
                    limit = showMeetingDetailRequest.limit;
                    searchKey = showMeetingDetailRequest.searchKey;
                    userUUID = showMeetingDetailRequest.userUUID;
                    xType = showMeetingDetailRequest.xType;
                    xQueryType = showMeetingDetailRequest.xQueryType;
                    xAuthorizationType = showMeetingDetailRequest.xAuthorizationType;
                    xSiteId = showMeetingDetailRequest.xSiteId;
                } else {
                    conferenceID = showMeetingDetailRequest['conferenceID'];
                    offset = showMeetingDetailRequest['offset'];
                    limit = showMeetingDetailRequest['limit'];
                    searchKey = showMeetingDetailRequest['searchKey'];
                    userUUID = showMeetingDetailRequest['userUUID'];
                    xType = showMeetingDetailRequest['X-Type'];
                    xQueryType = showMeetingDetailRequest['X-Query-Type'];
                    xAuthorizationType = showMeetingDetailRequest['X-Authorization-Type'];
                    xSiteId = showMeetingDetailRequest['X-Site-Id'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling showMeetingDetail.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xType !== undefined && xType !== null) {
                localVarHeaderParameter['X-Type'] = String(xType);
            }
            if (xQueryType !== undefined && xQueryType !== null) {
                localVarHeaderParameter['X-Query-Type'] = String(xQueryType);
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户查询单个会议纪要详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMeetingFile(showMeetingFileRequest?: ShowMeetingFileRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/sss/meeting-files/{file_code}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let fileCode;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showMeetingFileRequest !== null && showMeetingFileRequest !== undefined) {
                if (showMeetingFileRequest instanceof ShowMeetingFileRequest) {
                    fileCode = showMeetingFileRequest.fileCode;
                    xRequestId = showMeetingFileRequest.xRequestId;
                    acceptLanguage = showMeetingFileRequest.acceptLanguage;
                } else {
                    fileCode = showMeetingFileRequest['file_code'];
                    xRequestId = showMeetingFileRequest['X-Request-Id'];
                    acceptLanguage = showMeetingFileRequest['Accept-Language'];
                }
            }

        
            if (fileCode === null || fileCode === undefined) {
            throw new RequiredError('fileCode','Required parameter fileCode was null or undefined when calling showMeetingFile.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'file_code': fileCode, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户使用手机扫码后，手机端请求服务端,让服务端通知指定IdeaHub打开指定用户的会议纪要文件列表。二维码内容 ：cloudlink://cloudlink.huawei.com/h5page?action&#x3D;OPEN_MEETING_FILE_LIST&amp;key1&#x3D;value1&amp;key2&#x3D;value2 。key/value的个数可能变化，终端解析后，在发起后续请求时，将所有key/value存为map，作为入参即可。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMeetingFileList(showMeetingFileListRequest?: ShowMeetingFileListRequest) {
            const options = {
                method: "POST",
                url: "/v1/usg/sss/meeting-files/open-meeting-file-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showMeetingFileListRequest !== null && showMeetingFileListRequest !== undefined) {
                if (showMeetingFileListRequest instanceof ShowMeetingFileListRequest) {
                    body = showMeetingFileListRequest.body
                    xRequestId = showMeetingFileListRequest.xRequestId;
                    acceptLanguage = showMeetingFileListRequest.acceptLanguage;
                } else {
                    body = showMeetingFileListRequest['body'];
                    xRequestId = showMeetingFileListRequest['X-Request-Id'];
                    acceptLanguage = showMeetingFileListRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业用户通过该接口查询自己的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMyInfo(showMyInfoRequest?: ShowMyInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/member",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRequestId;
            
            let acceptLanguage;

            if (showMyInfoRequest !== null && showMyInfoRequest !== undefined) {
                if (showMyInfoRequest instanceof ShowMyInfoRequest) {
                    xRequestId = showMyInfoRequest.xRequestId;
                    acceptLanguage = showMyInfoRequest.acceptLanguage;
                } else {
                    xRequestId = showMyInfoRequest['X-Request-Id'];
                    acceptLanguage = showMyInfoRequest['Accept-Language'];
                }
            }

        
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询正在召开的会议详情。管理员可以查询本企业内所有的在线会议详情，普通用户仅能查询自己帐号创建或者需要参加的在线会议详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOnlineMeetingDetail(showOnlineMeetingDetailRequest?: ShowOnlineMeetingDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/online/confDetail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let offset;
            
            let limit;
            
            let searchKey;
            
            let userUUID;
            
            let xType;
            
            let xQueryType;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (showOnlineMeetingDetailRequest !== null && showOnlineMeetingDetailRequest !== undefined) {
                if (showOnlineMeetingDetailRequest instanceof ShowOnlineMeetingDetailRequest) {
                    conferenceID = showOnlineMeetingDetailRequest.conferenceID;
                    offset = showOnlineMeetingDetailRequest.offset;
                    limit = showOnlineMeetingDetailRequest.limit;
                    searchKey = showOnlineMeetingDetailRequest.searchKey;
                    userUUID = showOnlineMeetingDetailRequest.userUUID;
                    xType = showOnlineMeetingDetailRequest.xType;
                    xQueryType = showOnlineMeetingDetailRequest.xQueryType;
                    xAuthorizationType = showOnlineMeetingDetailRequest.xAuthorizationType;
                    xSiteId = showOnlineMeetingDetailRequest.xSiteId;
                } else {
                    conferenceID = showOnlineMeetingDetailRequest['conferenceID'];
                    offset = showOnlineMeetingDetailRequest['offset'];
                    limit = showOnlineMeetingDetailRequest['limit'];
                    searchKey = showOnlineMeetingDetailRequest['searchKey'];
                    userUUID = showOnlineMeetingDetailRequest['userUUID'];
                    xType = showOnlineMeetingDetailRequest['X-Type'];
                    xQueryType = showOnlineMeetingDetailRequest['X-Query-Type'];
                    xAuthorizationType = showOnlineMeetingDetailRequest['X-Authorization-Type'];
                    xSiteId = showOnlineMeetingDetailRequest['X-Site-Id'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling showOnlineMeetingDetail.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xType !== undefined && xType !== null) {
                localVarHeaderParameter['X-Type'] = String(xType);
            }
            if (xQueryType !== undefined && xQueryType !== null) {
                localVarHeaderParameter['X-Query-Type'] = String(xQueryType);
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员查询所属企业的资源使用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrgRes() {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/orgRes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID获取节目详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProgram(showProgramRequest?: ShowProgramRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/sss/programs/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showProgramRequest !== null && showProgramRequest !== undefined) {
                if (showProgramRequest instanceof ShowProgramRequest) {
                    id = showProgramRequest.id;
                    xRequestId = showProgramRequest.xRequestId;
                    acceptLanguage = showProgramRequest.acceptLanguage;
                } else {
                    id = showProgramRequest['id'];
                    xRequestId = showProgramRequest['X-Request-Id'];
                    acceptLanguage = showProgramRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showProgram.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID获取发布详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublication(showPublicationRequest?: ShowPublicationRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/sss/publications/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showPublicationRequest !== null && showPublicationRequest !== undefined) {
                if (showPublicationRequest instanceof ShowPublicationRequest) {
                    id = showPublicationRequest.id;
                    xRequestId = showPublicationRequest.xRequestId;
                    acceptLanguage = showPublicationRequest.acceptLanguage;
                } else {
                    id = showPublicationRequest['id'];
                    xRequestId = showPublicationRequest['X-Request-Id'];
                    acceptLanguage = showPublicationRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showPublication.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询正在召开的会议实时信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRealTimeInfoOfMeeting(showRealTimeInfoOfMeetingRequest?: ShowRealTimeInfoOfMeetingRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/control/conferences/realTimeInfo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (showRealTimeInfoOfMeetingRequest !== null && showRealTimeInfoOfMeetingRequest !== undefined) {
                if (showRealTimeInfoOfMeetingRequest instanceof ShowRealTimeInfoOfMeetingRequest) {
                    conferenceID = showRealTimeInfoOfMeetingRequest.conferenceID;
                    xConferenceAuthorization = showRealTimeInfoOfMeetingRequest.xConferenceAuthorization;
                } else {
                    conferenceID = showRealTimeInfoOfMeetingRequest['conferenceID'];
                    xConferenceAuthorization = showRealTimeInfoOfMeetingRequest['X-Conference-Authorization'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling showRealTimeInfoOfMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 改接口用于查询某个会议录制的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordingDetail(showRecordingDetailRequest?: ShowRecordingDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/record/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let confUUID;
            
            let userUUID;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (showRecordingDetailRequest !== null && showRecordingDetailRequest !== undefined) {
                if (showRecordingDetailRequest instanceof ShowRecordingDetailRequest) {
                    confUUID = showRecordingDetailRequest.confUUID;
                    userUUID = showRecordingDetailRequest.userUUID;
                    xAuthorizationType = showRecordingDetailRequest.xAuthorizationType;
                    xSiteId = showRecordingDetailRequest.xSiteId;
                } else {
                    confUUID = showRecordingDetailRequest['confUUID'];
                    userUUID = showRecordingDetailRequest['userUUID'];
                    xAuthorizationType = showRecordingDetailRequest['X-Authorization-Type'];
                    xSiteId = showRecordingDetailRequest['X-Site-Id'];
                }
            }

        
            if (confUUID === null || confUUID === undefined) {
                throw new RequiredError('confUUID','Required parameter confUUID was null or undefined when calling showRecordingDetail.');
            }
            if (confUUID !== null && confUUID !== undefined) {
                localVarQueryParameter['confUUID'] = confUUID;
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用户查询指定会议录制文件下载链接。
         * &gt; * 仅企业管理员权限的帐号才能查询录制文件的下载链接
         * &gt; * 这个接口需要在华为云会议后台开通白名单后才能调用。请联系华为销售人员，并提供华为云会议企业ID
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordingFileDownloadUrls(showRecordingFileDownloadUrlsRequest?: ShowRecordingFileDownloadUrlsRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/record/downloadurls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let confUUID;
            
            let offset;
            
            let limit;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (showRecordingFileDownloadUrlsRequest !== null && showRecordingFileDownloadUrlsRequest !== undefined) {
                if (showRecordingFileDownloadUrlsRequest instanceof ShowRecordingFileDownloadUrlsRequest) {
                    confUUID = showRecordingFileDownloadUrlsRequest.confUUID;
                    offset = showRecordingFileDownloadUrlsRequest.offset;
                    limit = showRecordingFileDownloadUrlsRequest.limit;
                    xAuthorizationType = showRecordingFileDownloadUrlsRequest.xAuthorizationType;
                    xSiteId = showRecordingFileDownloadUrlsRequest.xSiteId;
                } else {
                    confUUID = showRecordingFileDownloadUrlsRequest['confUUID'];
                    offset = showRecordingFileDownloadUrlsRequest['offset'];
                    limit = showRecordingFileDownloadUrlsRequest['limit'];
                    xAuthorizationType = showRecordingFileDownloadUrlsRequest['X-Authorization-Type'];
                    xSiteId = showRecordingFileDownloadUrlsRequest['X-Site-Id'];
                }
            }

        
            if (confUUID === null || confUUID === undefined) {
                throw new RequiredError('confUUID','Required parameter confUUID was null or undefined when calling showRecordingFileDownloadUrls.');
            }
            if (confUUID !== null && confUUID !== undefined) {
                localVarQueryParameter['confUUID'] = confUUID;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询会议所在区域的IP和域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRegionInfoOfMeeting(showRegionInfoOfMeetingRequest?: ShowRegionInfoOfMeetingRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/conferences/region/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;

            if (showRegionInfoOfMeetingRequest !== null && showRegionInfoOfMeetingRequest !== undefined) {
                if (showRegionInfoOfMeetingRequest instanceof ShowRegionInfoOfMeetingRequest) {
                    conferenceID = showRegionInfoOfMeetingRequest.conferenceID;
                } else {
                    conferenceID = showRegionInfoOfMeetingRequest['conferenceID'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling showRegionInfoOfMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定网络研讨会的高级设置。管理员可查询企业内的网络研讨会高级设置，非管理员只可查询自己预定的网络研讨会的高级设置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRoomSetting(showRoomSettingRequest?: ShowRoomSettingRequest) {
            const options = {
                method: "GET",
                url: "/v1/wss/webinar/open/room-setting/{conference_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let conferenceId;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showRoomSettingRequest !== null && showRoomSettingRequest !== undefined) {
                if (showRoomSettingRequest instanceof ShowRoomSettingRequest) {
                    conferenceId = showRoomSettingRequest.conferenceId;
                    xRequestId = showRoomSettingRequest.xRequestId;
                    acceptLanguage = showRoomSettingRequest.acceptLanguage;
                } else {
                    conferenceId = showRoomSettingRequest['conference_id'];
                    xRequestId = showRoomSettingRequest['X-Request-Id'];
                    acceptLanguage = showRoomSettingRequest['Accept-Language'];
                }
            }

        
            if (conferenceId === null || conferenceId === undefined) {
            throw new RequiredError('conferenceId','Required parameter conferenceId was null or undefined when calling showRoomSetting.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'conference_id': conferenceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SP管理员查询所属SP的共享资源使用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSpRes() {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/spRes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SP管理员查询SP的所有资源，包括已使用的资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSpResource(showSpResourceRequest?: ShowSpResourceRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/sp/resource",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let queryGroup;

            if (showSpResourceRequest !== null && showSpResourceRequest !== undefined) {
                if (showSpResourceRequest instanceof ShowSpResourceRequest) {
                    xRequestId = showSpResourceRequest.xRequestId;
                    acceptLanguage = showSpResourceRequest.acceptLanguage;
                    queryGroup = showSpResourceRequest.queryGroup;
                } else {
                    xRequestId = showSpResourceRequest['X-Request-Id'];
                    acceptLanguage = showSpResourceRequest['Accept-Language'];
                    queryGroup = showSpResourceRequest['queryGroup'];
                }
            }

        
            if (queryGroup !== null && queryGroup !== undefined) {
                localVarQueryParameter['queryGroup'] = queryGroup;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询SSO登录的鉴权配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSsoConfig(showSsoConfigRequest?: ShowSsoConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/acs/authorizeconfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRequestId;
            
            let acceptLanguage;

            if (showSsoConfigRequest !== null && showSsoConfigRequest !== undefined) {
                if (showSsoConfigRequest instanceof ShowSsoConfigRequest) {
                    xRequestId = showSsoConfigRequest.xRequestId;
                    acceptLanguage = showSsoConfigRequest.acceptLanguage;
                } else {
                    xRequestId = showSsoConfigRequest['X-Request-Id'];
                    acceptLanguage = showSsoConfigRequest['Accept-Language'];
                }
            }

        
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口查询企业用户详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserDetail(showUserDetailRequest?: ShowUserDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/usg/dcs/corp/member/{account}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let account;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (showUserDetailRequest !== null && showUserDetailRequest !== undefined) {
                if (showUserDetailRequest instanceof ShowUserDetailRequest) {
                    account = showUserDetailRequest.account;
                    xRequestId = showUserDetailRequest.xRequestId;
                    acceptLanguage = showUserDetailRequest.acceptLanguage;
                    accountType = showUserDetailRequest.accountType;
                } else {
                    account = showUserDetailRequest['account'];
                    xRequestId = showUserDetailRequest['X-Request-Id'];
                    acceptLanguage = showUserDetailRequest['Accept-Language'];
                    accountType = showUserDetailRequest['accountType'];
                }
            }

        
            if (account === null || account === undefined) {
            throw new RequiredError('account','Required parameter account was null or undefined when calling showUserDetail.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'account': account, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于管理员查询企业事件订阅配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWebHookConfig(showWebHookConfigRequest?: ShowWebHookConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/mmc/management/webhook/link-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let corpId;
            
            let spId;

            if (showWebHookConfigRequest !== null && showWebHookConfigRequest !== undefined) {
                if (showWebHookConfigRequest instanceof ShowWebHookConfigRequest) {
                    corpId = showWebHookConfigRequest.corpId;
                    spId = showWebHookConfigRequest.spId;
                } else {
                    corpId = showWebHookConfigRequest['corpId'];
                    spId = showWebHookConfigRequest['spId'];
                }
            }

        
            if (corpId !== null && corpId !== undefined) {
                localVarQueryParameter['corpId'] = corpId;
            }
            if (spId !== null && spId !== undefined) {
                localVarQueryParameter['spId'] = spId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定网络研讨会的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWebinar(showWebinarRequest?: ShowWebinarRequest) {
            const options = {
                method: "GET",
                url: "/v1/wss/webinar/open/conferences/{conference_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let conferenceId;
            
            let xRequestId;
            
            let acceptLanguage;

            if (showWebinarRequest !== null && showWebinarRequest !== undefined) {
                if (showWebinarRequest instanceof ShowWebinarRequest) {
                    conferenceId = showWebinarRequest.conferenceId;
                    xRequestId = showWebinarRequest.xRequestId;
                    acceptLanguage = showWebinarRequest.acceptLanguage;
                } else {
                    conferenceId = showWebinarRequest['conference_id'];
                    xRequestId = showWebinarRequest['X-Request-Id'];
                    acceptLanguage = showWebinarRequest['Accept-Language'];
                }
            }

        
            if (conferenceId === null || conferenceId === undefined) {
            throw new RequiredError('conferenceId','Required parameter conferenceId was null or undefined when calling showWebinar.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.pathParams = { 'conference_id': conferenceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于通过会议ID和会议密码激活会议。所有的会控接口都需要在会议激活后才能调用，可以通过该接口先激活会议。
         * &gt; 来宾密码是否可以激活会议取决于会议创建时是否设置了“是否允许来宾启动会议”（allowGuestStartConf&#x3D;true）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startMeeting(startMeetingRequest?: StartMeetingRequest) {
            const options = {
                method: "POST",
                url: "/v1/mmc/management/conferences/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (startMeetingRequest !== null && startMeetingRequest !== undefined) {
                if (startMeetingRequest instanceof StartMeetingRequest) {
                    body = startMeetingRequest.body
                } else {
                    body = startMeetingRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于结束正在召开的会议。
         * &gt; * 如果管理员在企业的会议设置中关闭“结束会议保留预约记录”开关，会议结束后会议列表中将删除该会议，与会者不能再次加入该会议。否则会议预约时间到之前，与会者可以再次加入该会议
         * &gt; * “结束会议保留预约记录”默认是开的
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopMeeting(stopMeetingRequest?: StopMeetingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (stopMeetingRequest !== null && stopMeetingRequest !== undefined) {
                if (stopMeetingRequest instanceof StopMeetingRequest) {
                    conferenceID = stopMeetingRequest.conferenceID;
                    xConferenceAuthorization = stopMeetingRequest.xConferenceAuthorization;
                } else {
                    conferenceID = stopMeetingRequest['conferenceID'];
                    xConferenceAuthorization = stopMeetingRequest['X-Conference-Authorization'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling stopMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于切换会中视频画面显示策略，包括广播多画面，广播单画面，声控多画面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchMode(switchModeRequest?: SwitchModeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/display/mode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (switchModeRequest !== null && switchModeRequest !== undefined) {
                if (switchModeRequest instanceof SwitchModeRequest) {
                    conferenceID = switchModeRequest.conferenceID;
                    xConferenceAuthorization = switchModeRequest.xConferenceAuthorization;
                    body = switchModeRequest.body
                } else {
                    conferenceID = switchModeRequest['conferenceID'];
                    xConferenceAuthorization = switchModeRequest['X-Conference-Authorization'];
                    body = switchModeRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling switchMode.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业用户通过该接口修改手机或邮箱，需要先获取验证码，验证多次失败会禁止修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateContact(updateContactRequest?: UpdateContactRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/member/contact",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateContactRequest !== null && updateContactRequest !== undefined) {
                if (updateContactRequest instanceof UpdateContactRequest) {
                    body = updateContactRequest.body
                    xRequestId = updateContactRequest.xRequestId;
                    acceptLanguage = updateContactRequest.acceptLanguage;
                } else {
                    body = updateContactRequest['body'];
                    xRequestId = updateContactRequest['X-Request-Id'];
                    acceptLanguage = updateContactRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改企业，若任一参数为null或者不携带则不修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCorp(updateCorpRequest?: UpdateCorpRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/sp/corp/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateCorpRequest !== null && updateCorpRequest !== undefined) {
                if (updateCorpRequest instanceof UpdateCorpRequest) {
                    id = updateCorpRequest.id;
                    body = updateCorpRequest.body
                    xRequestId = updateCorpRequest.xRequestId;
                    acceptLanguage = updateCorpRequest.acceptLanguage;
                } else {
                    id = updateCorpRequest['id'];
                    body = updateCorpRequest['body'];
                    xRequestId = updateCorpRequest['X-Request-Id'];
                    acceptLanguage = updateCorpRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateCorp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口修改企业注册信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCorpBasicInfo(updateCorpBasicInfoRequest?: UpdateCorpBasicInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/corp",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateCorpBasicInfoRequest !== null && updateCorpBasicInfoRequest !== undefined) {
                if (updateCorpBasicInfoRequest instanceof UpdateCorpBasicInfoRequest) {
                    body = updateCorpBasicInfoRequest.body
                    xRequestId = updateCorpBasicInfoRequest.xRequestId;
                    acceptLanguage = updateCorpBasicInfoRequest.acceptLanguage;
                } else {
                    body = updateCorpBasicInfoRequest['body'];
                    xRequestId = updateCorpBasicInfoRequest['X-Request-Id'];
                    acceptLanguage = updateCorpBasicInfoRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口修改部门。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDepartment(updateDepartmentRequest?: UpdateDepartmentRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/corp/dept/{dept_code}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deptCode;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateDepartmentRequest !== null && updateDepartmentRequest !== undefined) {
                if (updateDepartmentRequest instanceof UpdateDepartmentRequest) {
                    deptCode = updateDepartmentRequest.deptCode;
                    body = updateDepartmentRequest.body
                    xRequestId = updateDepartmentRequest.xRequestId;
                    acceptLanguage = updateDepartmentRequest.acceptLanguage;
                } else {
                    deptCode = updateDepartmentRequest['dept_code'];
                    body = updateDepartmentRequest['body'];
                    xRequestId = updateDepartmentRequest['X-Request-Id'];
                    acceptLanguage = updateDepartmentRequest['Accept-Language'];
                }
            }

        
            if (deptCode === null || deptCode === undefined) {
            throw new RequiredError('deptCode','Required parameter deptCode was null or undefined when calling updateDepartment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'dept_code': deptCode, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口修改专业会议终端。
         * &gt; 如果需要修改Ideahub、SmartRooms、智慧屏TV请使用[[修改用户](https://support.huaweicloud.com/api-meeting/meeting_21_0068.html)](tag:hws)[[修改用户](https://support.huaweicloud.com/intl/zh-cn/api-meeting/meeting_21_0068.html)](tag:hk)接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDevice(updateDeviceRequest?: UpdateDeviceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/corp/device/{sn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let sn;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateDeviceRequest !== null && updateDeviceRequest !== undefined) {
                if (updateDeviceRequest instanceof UpdateDeviceRequest) {
                    sn = updateDeviceRequest.sn;
                    body = updateDeviceRequest.body
                    xRequestId = updateDeviceRequest.xRequestId;
                    acceptLanguage = updateDeviceRequest.acceptLanguage;
                } else {
                    sn = updateDeviceRequest['sn'];
                    body = updateDeviceRequest['body'];
                    xRequestId = updateDeviceRequest['X-Request-Id'];
                    acceptLanguage = updateDeviceRequest['Accept-Language'];
                }
            }

        
            if (sn === null || sn === undefined) {
            throw new RequiredError('sn','Required parameter sn was null or undefined when calling updateDevice.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'sn': sn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新信息窗素材。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMaterial(updateMaterialRequest?: UpdateMaterialRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/sss/materials/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateMaterialRequest !== null && updateMaterialRequest !== undefined) {
                if (updateMaterialRequest instanceof UpdateMaterialRequest) {
                    id = updateMaterialRequest.id;
                    body = updateMaterialRequest.body
                    xRequestId = updateMaterialRequest.xRequestId;
                    acceptLanguage = updateMaterialRequest.acceptLanguage;
                } else {
                    id = updateMaterialRequest['id'];
                    body = updateMaterialRequest['body'];
                    xRequestId = updateMaterialRequest['X-Request-Id'];
                    acceptLanguage = updateMaterialRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateMaterial.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改已预约的会议。会议开始后，不能被修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMeeting(updateMeetingRequest?: UpdateMeetingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/management/conferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let userUUID;
            
            let xAuthorizationType;
            
            let xSiteId;

            if (updateMeetingRequest !== null && updateMeetingRequest !== undefined) {
                if (updateMeetingRequest instanceof UpdateMeetingRequest) {
                    conferenceID = updateMeetingRequest.conferenceID;
                    body = updateMeetingRequest.body
                    userUUID = updateMeetingRequest.userUUID;
                    xAuthorizationType = updateMeetingRequest.xAuthorizationType;
                    xSiteId = updateMeetingRequest.xSiteId;
                } else {
                    conferenceID = updateMeetingRequest['conferenceID'];
                    body = updateMeetingRequest['body'];
                    userUUID = updateMeetingRequest['userUUID'];
                    xAuthorizationType = updateMeetingRequest['X-Authorization-Type'];
                    xSiteId = updateMeetingRequest['X-Site-Id'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling updateMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业用户登录后可以修改分配给用户的云会议室及个人会议ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMemberVmr(updateMemberVmrRequest?: UpdateMemberVmrRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/member/vmr/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateMemberVmrRequest !== null && updateMemberVmrRequest !== undefined) {
                if (updateMemberVmrRequest instanceof UpdateMemberVmrRequest) {
                    id = updateMemberVmrRequest.id;
                    body = updateMemberVmrRequest.body
                    xRequestId = updateMemberVmrRequest.xRequestId;
                    acceptLanguage = updateMemberVmrRequest.acceptLanguage;
                } else {
                    id = updateMemberVmrRequest['id'];
                    body = updateMemberVmrRequest['body'];
                    xRequestId = updateMemberVmrRequest['X-Request-Id'];
                    acceptLanguage = updateMemberVmrRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateMemberVmr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业用户通过该接口修改自己的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMyInfo(updateMyInfoRequest?: UpdateMyInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/member",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateMyInfoRequest !== null && updateMyInfoRequest !== undefined) {
                if (updateMyInfoRequest instanceof UpdateMyInfoRequest) {
                    body = updateMyInfoRequest.body
                    xRequestId = updateMyInfoRequest.xRequestId;
                    acceptLanguage = updateMyInfoRequest.acceptLanguage;
                } else {
                    body = updateMyInfoRequest['body'];
                    xRequestId = updateMyInfoRequest['X-Request-Id'];
                    acceptLanguage = updateMyInfoRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新信息窗节目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProgram(updateProgramRequest?: UpdateProgramRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/sss/programs/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateProgramRequest !== null && updateProgramRequest !== undefined) {
                if (updateProgramRequest instanceof UpdateProgramRequest) {
                    id = updateProgramRequest.id;
                    body = updateProgramRequest.body
                    xRequestId = updateProgramRequest.xRequestId;
                    acceptLanguage = updateProgramRequest.acceptLanguage;
                } else {
                    id = updateProgramRequest['id'];
                    body = updateProgramRequest['body'];
                    xRequestId = updateProgramRequest['X-Request-Id'];
                    acceptLanguage = updateProgramRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateProgram.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改信息窗发布。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePublication(updatePublicationRequest?: UpdatePublicationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/sss/publications/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updatePublicationRequest !== null && updatePublicationRequest !== undefined) {
                if (updatePublicationRequest instanceof UpdatePublicationRequest) {
                    id = updatePublicationRequest.id;
                    body = updatePublicationRequest.body
                    xRequestId = updatePublicationRequest.xRequestId;
                    acceptLanguage = updatePublicationRequest.acceptLanguage;
                } else {
                    id = updatePublicationRequest['id'];
                    body = updatePublicationRequest['body'];
                    xRequestId = updatePublicationRequest['X-Request-Id'];
                    acceptLanguage = updatePublicationRequest['Accept-Language'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updatePublication.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业成员通过该接口提供用户修改密码功能，服务器收到请求，修改用户密码并返回结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePwd(updatePwdRequest?: UpdatePwdRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/acs/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestID;
            
            let acceptLanguage;

            if (updatePwdRequest !== null && updatePwdRequest !== undefined) {
                if (updatePwdRequest instanceof UpdatePwdRequest) {
                    body = updatePwdRequest.body
                    xRequestID = updatePwdRequest.xRequestID;
                    acceptLanguage = updatePwdRequest.acceptLanguage;
                } else {
                    body = updatePwdRequest['body'];
                    xRequestID = updatePwdRequest['X-Request-ID'];
                    acceptLanguage = updatePwdRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改已预约的周期性会议。会议开始后，不能被修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecurringMeeting(updateRecurringMeetingRequest?: UpdateRecurringMeetingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/management/cycleconferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xAuthorizationType;
            
            let userUUID;
            
            let xSiteId;

            if (updateRecurringMeetingRequest !== null && updateRecurringMeetingRequest !== undefined) {
                if (updateRecurringMeetingRequest instanceof UpdateRecurringMeetingRequest) {
                    conferenceID = updateRecurringMeetingRequest.conferenceID;
                    body = updateRecurringMeetingRequest.body
                    xAuthorizationType = updateRecurringMeetingRequest.xAuthorizationType;
                    userUUID = updateRecurringMeetingRequest.userUUID;
                    xSiteId = updateRecurringMeetingRequest.xSiteId;
                } else {
                    conferenceID = updateRecurringMeetingRequest['conferenceID'];
                    body = updateRecurringMeetingRequest['body'];
                    xAuthorizationType = updateRecurringMeetingRequest['X-Authorization-Type'];
                    userUUID = updateRecurringMeetingRequest['userUUID'];
                    xSiteId = updateRecurringMeetingRequest['X-Site-Id'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling updateRecurringMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改已预约的周期性会议的子会议。会议开始后，不能被修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecurringSubMeeting(updateRecurringSubMeetingRequest?: UpdateRecurringSubMeetingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/management/conferences/cyclesubconf",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xAuthorizationType;
            
            let userUUID;
            
            let xSiteId;

            if (updateRecurringSubMeetingRequest !== null && updateRecurringSubMeetingRequest !== undefined) {
                if (updateRecurringSubMeetingRequest instanceof UpdateRecurringSubMeetingRequest) {
                    conferenceID = updateRecurringSubMeetingRequest.conferenceID;
                    body = updateRecurringSubMeetingRequest.body
                    xAuthorizationType = updateRecurringSubMeetingRequest.xAuthorizationType;
                    userUUID = updateRecurringSubMeetingRequest.userUUID;
                    xSiteId = updateRecurringSubMeetingRequest.xSiteId;
                } else {
                    conferenceID = updateRecurringSubMeetingRequest['conferenceID'];
                    body = updateRecurringSubMeetingRequest['body'];
                    xAuthorizationType = updateRecurringSubMeetingRequest['X-Authorization-Type'];
                    userUUID = updateRecurringSubMeetingRequest['userUUID'];
                    xSiteId = updateRecurringSubMeetingRequest['X-Site-Id'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling updateRecurringSubMeeting.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (userUUID !== null && userUUID !== undefined) {
                localVarQueryParameter['userUUID'] = userUUID;
            }
            if (xAuthorizationType !== undefined && xAuthorizationType !== null) {
                localVarHeaderParameter['X-Authorization-Type'] = String(xAuthorizationType);
            }
            if (xSiteId !== undefined && xSiteId !== null) {
                localVarHeaderParameter['X-Site-Id'] = String(xSiteId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业修改资源的过期时间、停用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResource(updateResourceRequest?: UpdateResourceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/sp/corp/{corp_id}/resource",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let corpId;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateResourceRequest !== null && updateResourceRequest !== undefined) {
                if (updateResourceRequest instanceof UpdateResourceRequest) {
                    corpId = updateResourceRequest.corpId;
                    body = updateResourceRequest.body
                    xRequestId = updateResourceRequest.xRequestId;
                    acceptLanguage = updateResourceRequest.acceptLanguage;
                } else {
                    corpId = updateResourceRequest['corp_id'];
                    body = updateResourceRequest['body'];
                    xRequestId = updateResourceRequest['X-Request-Id'];
                    acceptLanguage = updateResourceRequest['Accept-Language'];
                }
            }

        
            if (corpId === null || corpId === undefined) {
            throw new RequiredError('corpId','Required parameter corpId was null or undefined when calling updateResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'corp_id': corpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置指定网络研讨会的高级设置。管理员可设置企业内的网络研讨会高级设置，非管理员只可设置自己预定的网络研讨会的高级设置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRoomSetting(updateRoomSettingRequest?: UpdateRoomSettingRequest) {
            const options = {
                method: "POST",
                url: "/v1/wss/webinar/open/room-setting/{conference_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let conferenceId;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateRoomSettingRequest !== null && updateRoomSettingRequest !== undefined) {
                if (updateRoomSettingRequest instanceof UpdateRoomSettingRequest) {
                    conferenceId = updateRoomSettingRequest.conferenceId;
                    xRequestId = updateRoomSettingRequest.xRequestId;
                    acceptLanguage = updateRoomSettingRequest.acceptLanguage;
                    body = updateRoomSettingRequest.body
                } else {
                    conferenceId = updateRoomSettingRequest['conference_id'];
                    xRequestId = updateRoomSettingRequest['X-Request-Id'];
                    acceptLanguage = updateRoomSettingRequest['Accept-Language'];
                    body = updateRoomSettingRequest['body'];
                }
            }

        
            if (conferenceId === null || conferenceId === undefined) {
            throw new RequiredError('conferenceId','Required parameter conferenceId was null or undefined when calling updateRoomSetting.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'conference_id': conferenceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改会议配置，包括会议共享是否锁定，允许呼入范围。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStartedConfConfig(updateStartedConfConfigRequest?: UpdateStartedConfConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/control/conferences/updateStartedConfConfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let conferenceID;
            
            let xConferenceAuthorization;

            if (updateStartedConfConfigRequest !== null && updateStartedConfConfigRequest !== undefined) {
                if (updateStartedConfConfigRequest instanceof UpdateStartedConfConfigRequest) {
                    conferenceID = updateStartedConfConfigRequest.conferenceID;
                    xConferenceAuthorization = updateStartedConfConfigRequest.xConferenceAuthorization;
                    body = updateStartedConfConfigRequest.body
                } else {
                    conferenceID = updateStartedConfConfigRequest['conferenceID'];
                    xConferenceAuthorization = updateStartedConfConfigRequest['X-Conference-Authorization'];
                    body = updateStartedConfConfigRequest['body'];
                }
            }

        
            if (conferenceID === null || conferenceID === undefined) {
                throw new RequiredError('conferenceID','Required parameter conferenceID was null or undefined when calling updateStartedConfConfig.');
            }
            if (conferenceID !== null && conferenceID !== undefined) {
                localVarQueryParameter['conferenceID'] = conferenceID;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xConferenceAuthorization !== undefined && xConferenceAuthorization !== null) {
                localVarHeaderParameter['X-Conference-Authorization'] = String(xConferenceAuthorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口提供刷新Token功能，根据传入的Token，刷新Token失效时间并返回结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateToken(updateTokenRequest?: UpdateTokenRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/acs/token",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRequestID;
            
            let acceptLanguage;

            if (updateTokenRequest !== null && updateTokenRequest !== undefined) {
                if (updateTokenRequest instanceof UpdateTokenRequest) {
                    xRequestID = updateTokenRequest.xRequestID;
                    acceptLanguage = updateTokenRequest.acceptLanguage;
                } else {
                    xRequestID = updateTokenRequest['X-Request-ID'];
                    acceptLanguage = updateTokenRequest['Accept-Language'];
                }
            }

        
            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-Request-ID'] = String(xRequestID);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 企业管理员通过该接口修改企业用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUser(updateUserRequest?: UpdateUserRequest) {
            const options = {
                method: "PUT",
                url: "/v1/usg/dcs/corp/member/{account}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let account;
            
            let xRequestId;
            
            let acceptLanguage;
            
            let accountType;

            if (updateUserRequest !== null && updateUserRequest !== undefined) {
                if (updateUserRequest instanceof UpdateUserRequest) {
                    account = updateUserRequest.account;
                    body = updateUserRequest.body
                    xRequestId = updateUserRequest.xRequestId;
                    acceptLanguage = updateUserRequest.acceptLanguage;
                    accountType = updateUserRequest.accountType;
                } else {
                    account = updateUserRequest['account'];
                    body = updateUserRequest['body'];
                    xRequestId = updateUserRequest['X-Request-Id'];
                    acceptLanguage = updateUserRequest['Accept-Language'];
                    accountType = updateUserRequest['accountType'];
                }
            }

        
            if (account === null || account === undefined) {
            throw new RequiredError('account','Required parameter account was null or undefined when calling updateUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['accountType'] = accountType;
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'account': account, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于管理员变更订阅配置使用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWebHookConfigStatus(updateWebHookConfigStatusRequest?: UpdateWebHookConfigStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mmc/management/webhook/change-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let status;

            if (updateWebHookConfigStatusRequest !== null && updateWebHookConfigStatusRequest !== undefined) {
                if (updateWebHookConfigStatusRequest instanceof UpdateWebHookConfigStatusRequest) {
                    id = updateWebHookConfigStatusRequest.id;
                    status = updateWebHookConfigStatusRequest.status;
                } else {
                    id = updateWebHookConfigStatusRequest['id'];
                    status = updateWebHookConfigStatusRequest['status'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateWebHookConfigStatus.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (status === null || status === undefined) {
                throw new RequiredError('status','Required parameter status was null or undefined when calling updateWebHookConfigStatus.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改已创建的网络研讨会。网络研讨会开始后不能修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWebinar(updateWebinarRequest?: UpdateWebinarRequest) {
            const options = {
                method: "PUT",
                url: "/v1/wss/webinar/open/conferences",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let acceptLanguage;

            if (updateWebinarRequest !== null && updateWebinarRequest !== undefined) {
                if (updateWebinarRequest instanceof UpdateWebinarRequest) {
                    body = updateWebinarRequest.body
                    xRequestId = updateWebinarRequest.xRequestId;
                    acceptLanguage = updateWebinarRequest.acceptLanguage;
                } else {
                    body = updateWebinarRequest['body'];
                    xRequestId = updateWebinarRequest['X-Request-Id'];
                    acceptLanguage = updateWebinarRequest['Accept-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用户上传网络研讨会高级设置用的图片。图片可用于网络研讨会的封面和Logo。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadFile(uploadFileRequest?: UploadFileRequest) {
            const options = {
                method: "PUT",
                url: "/v1/wss/webinar/open/res/file",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            
            
            let xRequestId;
            
            let acceptLanguage;

            if (uploadFileRequest !== null && uploadFileRequest !== undefined) {
                if (uploadFileRequest instanceof UploadFileRequest) {
                    file = uploadFileRequest.body?.file;
                    xRequestId = uploadFileRequest.xRequestId;
                    acceptLanguage = uploadFileRequest.acceptLanguage;
                } else {
                    file = uploadFileRequest['body']['file'];
                    xRequestId = uploadFileRequest['X-Request-Id'];
                    acceptLanguage = uploadFileRequest['Accept-Language'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling uploadFile.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询企业内历史会议的QoS告警。仅旗舰版企业/标准版企业的企业管理员有权限查询。可以查询最近3个月内的数据。
         * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchQosHistoryMeetings(searchQosHistoryMeetingsRequest?: SearchQosHistoryMeetingsRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/conferences/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startDate;
            
            let endDate;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchQosHistoryMeetingsRequest !== null && searchQosHistoryMeetingsRequest !== undefined) {
                if (searchQosHistoryMeetingsRequest instanceof SearchQosHistoryMeetingsRequest) {
                    startDate = searchQosHistoryMeetingsRequest.startDate;
                    endDate = searchQosHistoryMeetingsRequest.endDate;
                    offset = searchQosHistoryMeetingsRequest.offset;
                    limit = searchQosHistoryMeetingsRequest.limit;
                    searchKey = searchQosHistoryMeetingsRequest.searchKey;
                } else {
                    startDate = searchQosHistoryMeetingsRequest['startDate'];
                    endDate = searchQosHistoryMeetingsRequest['endDate'];
                    offset = searchQosHistoryMeetingsRequest['offset'];
                    limit = searchQosHistoryMeetingsRequest['limit'];
                    searchKey = searchQosHistoryMeetingsRequest['searchKey'];
                }
            }

        
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling searchQosHistoryMeetings.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling searchQosHistoryMeetings.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询企业内正在召开会议的QoS告警。仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchQosOnlineMeetings(searchQosOnlineMeetingsRequest?: SearchQosOnlineMeetingsRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/conferences/online",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchQosOnlineMeetingsRequest !== null && searchQosOnlineMeetingsRequest !== undefined) {
                if (searchQosOnlineMeetingsRequest instanceof SearchQosOnlineMeetingsRequest) {
                    offset = searchQosOnlineMeetingsRequest.offset;
                    limit = searchQosOnlineMeetingsRequest.limit;
                    searchKey = searchQosOnlineMeetingsRequest.searchKey;
                } else {
                    offset = searchQosOnlineMeetingsRequest['offset'];
                    limit = searchQosOnlineMeetingsRequest['limit'];
                    searchKey = searchQosOnlineMeetingsRequest['searchKey'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询企业内在线会议或历史会议的与会者QoS数据。仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchQosParticipantDetail(searchQosParticipantDetailRequest?: SearchQosParticipantDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/conference/participant/qos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let confUUID;
            
            let confType;
            
            let participantID;
            
            let qosType;

            if (searchQosParticipantDetailRequest !== null && searchQosParticipantDetailRequest !== undefined) {
                if (searchQosParticipantDetailRequest instanceof SearchQosParticipantDetailRequest) {
                    confUUID = searchQosParticipantDetailRequest.confUUID;
                    confType = searchQosParticipantDetailRequest.confType;
                    participantID = searchQosParticipantDetailRequest.participantID;
                    qosType = searchQosParticipantDetailRequest.qosType;
                } else {
                    confUUID = searchQosParticipantDetailRequest['confUUID'];
                    confType = searchQosParticipantDetailRequest['confType'];
                    participantID = searchQosParticipantDetailRequest['participantID'];
                    qosType = searchQosParticipantDetailRequest['qosType'];
                }
            }

        
            if (confUUID === null || confUUID === undefined) {
                throw new RequiredError('confUUID','Required parameter confUUID was null or undefined when calling searchQosParticipantDetail.');
            }
            if (confUUID !== null && confUUID !== undefined) {
                localVarQueryParameter['confUUID'] = confUUID;
            }
            if (confType === null || confType === undefined) {
                throw new RequiredError('confType','Required parameter confType was null or undefined when calling searchQosParticipantDetail.');
            }
            if (confType !== null && confType !== undefined) {
                localVarQueryParameter['confType'] = confType;
            }
            if (participantID === null || participantID === undefined) {
                throw new RequiredError('participantID','Required parameter participantID was null or undefined when calling searchQosParticipantDetail.');
            }
            if (participantID !== null && participantID !== undefined) {
                localVarQueryParameter['participantID'] = participantID;
            }
            if (qosType === null || qosType === undefined) {
                throw new RequiredError('qosType','Required parameter qosType was null or undefined when calling searchQosParticipantDetail.');
            }
            if (qosType !== null && qosType !== undefined) {
                localVarQueryParameter['qosType'] = qosType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询企业内在线会议或历史会议的与会者QoS告警。仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchQosParticipants(searchQosParticipantsRequest?: SearchQosParticipantsRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/conference/participants",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let confUUID;
            
            let confType;
            
            let offset;
            
            let limit;
            
            let searchKey;

            if (searchQosParticipantsRequest !== null && searchQosParticipantsRequest !== undefined) {
                if (searchQosParticipantsRequest instanceof SearchQosParticipantsRequest) {
                    confUUID = searchQosParticipantsRequest.confUUID;
                    confType = searchQosParticipantsRequest.confType;
                    offset = searchQosParticipantsRequest.offset;
                    limit = searchQosParticipantsRequest.limit;
                    searchKey = searchQosParticipantsRequest.searchKey;
                } else {
                    confUUID = searchQosParticipantsRequest['confUUID'];
                    confType = searchQosParticipantsRequest['confType'];
                    offset = searchQosParticipantsRequest['offset'];
                    limit = searchQosParticipantsRequest['limit'];
                    searchKey = searchQosParticipantsRequest['searchKey'];
                }
            }

        
            if (confUUID === null || confUUID === undefined) {
                throw new RequiredError('confUUID','Required parameter confUUID was null or undefined when calling searchQosParticipants.');
            }
            if (confUUID !== null && confUUID !== undefined) {
                localVarQueryParameter['confUUID'] = confUUID;
            }
            if (confType === null || confType === undefined) {
                throw new RequiredError('confType','Required parameter confType was null or undefined when calling searchQosParticipants.');
            }
            if (confType !== null && confType !== undefined) {
                localVarQueryParameter['confType'] = confType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchKey !== null && searchKey !== undefined) {
                localVarQueryParameter['searchKey'] = searchKey;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置QoS告警阈值。仅旗舰版企业/标准版企业的企业管理员有权限设置。
         * &gt; 仪表盘的QoS统计功能需要申请才能开通。请联系华为销售人员，并提供华为云会议企业ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setQosThreshold(setQosThresholdRequest?: SetQosThresholdRequest) {
            const options = {
                method: "POST",
                url: "/v1/metrics/conference/threshold",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let thresholdType;

            if (setQosThresholdRequest !== null && setQosThresholdRequest !== undefined) {
                if (setQosThresholdRequest instanceof SetQosThresholdRequest) {
                    thresholdType = setQosThresholdRequest.thresholdType;
                    body = setQosThresholdRequest.body
                } else {
                    thresholdType = setQosThresholdRequest['thresholdType'];
                    body = setQosThresholdRequest['body'];
                }
            }

        
            if (thresholdType === null || thresholdType === undefined) {
                throw new RequiredError('thresholdType','Required parameter thresholdType was null or undefined when calling setQosThreshold.');
            }
            if (thresholdType !== null && thresholdType !== undefined) {
                localVarQueryParameter['thresholdType'] = thresholdType;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询QoS告警阈值。仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * &gt; 该接口用于查询QoS告警阈值。仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQosThreshold(showQosThresholdRequest?: ShowQosThresholdRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/conference/threshold",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let thresholdType;

            if (showQosThresholdRequest !== null && showQosThresholdRequest !== undefined) {
                if (showQosThresholdRequest instanceof ShowQosThresholdRequest) {
                    thresholdType = showQosThresholdRequest.thresholdType;
                } else {
                    thresholdType = showQosThresholdRequest['thresholdType'];
                }
            }

        
            if (thresholdType === null || thresholdType === undefined) {
                throw new RequiredError('thresholdType','Required parameter thresholdType was null or undefined when calling showQosThreshold.');
            }
            if (thresholdType !== null && thresholdType !== undefined) {
                localVarQueryParameter['thresholdType'] = thresholdType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询企业内：
         * * 单日内按小时统计的会议数据。
         * * 指定日期范围内按日/按月统计的会议数据。
         * &gt; 仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchStatisticConferenceInfo(searchStatisticConferenceInfoRequest?: SearchStatisticConferenceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/dashboard/statistic/conference/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let timeUnit;
            
            let startTime;
            
            let endTime;
            
            let category;
            
            let offset;
            
            let limit;

            if (searchStatisticConferenceInfoRequest !== null && searchStatisticConferenceInfoRequest !== undefined) {
                if (searchStatisticConferenceInfoRequest instanceof SearchStatisticConferenceInfoRequest) {
                    timeUnit = searchStatisticConferenceInfoRequest.timeUnit;
                    startTime = searchStatisticConferenceInfoRequest.startTime;
                    endTime = searchStatisticConferenceInfoRequest.endTime;
                    category = searchStatisticConferenceInfoRequest.category;
                    offset = searchStatisticConferenceInfoRequest.offset;
                    limit = searchStatisticConferenceInfoRequest.limit;
                } else {
                    timeUnit = searchStatisticConferenceInfoRequest['timeUnit'];
                    startTime = searchStatisticConferenceInfoRequest['startTime'];
                    endTime = searchStatisticConferenceInfoRequest['endTime'];
                    category = searchStatisticConferenceInfoRequest['category'];
                    offset = searchStatisticConferenceInfoRequest['offset'];
                    limit = searchStatisticConferenceInfoRequest['limit'];
                }
            }

        
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling searchStatisticConferenceInfo.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['timeUnit'] = timeUnit;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling searchStatisticConferenceInfo.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling searchStatisticConferenceInfo.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling searchStatisticConferenceInfo.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询企业内与会者数据统计：
         * * 查询与会用户统计数据，按日/按月统计。
         * * 查询与会硬件终端统计数据，按日/按月统计。
         * * 查询与会设备统计数据，按日/按月统计。
         * &gt; 仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchStatisticConferenceParticipant(searchStatisticConferenceParticipantRequest?: SearchStatisticConferenceParticipantRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/dashboard/statistic/conference/participant",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let timeUnit;
            
            let startTime;
            
            let endTime;
            
            let category;
            
            let offset;
            
            let limit;

            if (searchStatisticConferenceParticipantRequest !== null && searchStatisticConferenceParticipantRequest !== undefined) {
                if (searchStatisticConferenceParticipantRequest instanceof SearchStatisticConferenceParticipantRequest) {
                    timeUnit = searchStatisticConferenceParticipantRequest.timeUnit;
                    startTime = searchStatisticConferenceParticipantRequest.startTime;
                    endTime = searchStatisticConferenceParticipantRequest.endTime;
                    category = searchStatisticConferenceParticipantRequest.category;
                    offset = searchStatisticConferenceParticipantRequest.offset;
                    limit = searchStatisticConferenceParticipantRequest.limit;
                } else {
                    timeUnit = searchStatisticConferenceParticipantRequest['timeUnit'];
                    startTime = searchStatisticConferenceParticipantRequest['startTime'];
                    endTime = searchStatisticConferenceParticipantRequest['endTime'];
                    category = searchStatisticConferenceParticipantRequest['category'];
                    offset = searchStatisticConferenceParticipantRequest['offset'];
                    limit = searchStatisticConferenceParticipantRequest['limit'];
                }
            }

        
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling searchStatisticConferenceParticipant.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['timeUnit'] = timeUnit;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling searchStatisticConferenceParticipant.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling searchStatisticConferenceParticipant.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling searchStatisticConferenceParticipant.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询企业内已购资源使用状况数据统计：
         * * 查询已购资源使用状况，按日/按月统计。
         * &gt; 仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchStatisticResourceInfo(searchStatisticResourceInfoRequest?: SearchStatisticResourceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/dashboard/statistic/resource/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let timeUnit;
            
            let startTime;
            
            let endTime;
            
            let category;
            
            let offset;
            
            let limit;

            if (searchStatisticResourceInfoRequest !== null && searchStatisticResourceInfoRequest !== undefined) {
                if (searchStatisticResourceInfoRequest instanceof SearchStatisticResourceInfoRequest) {
                    timeUnit = searchStatisticResourceInfoRequest.timeUnit;
                    startTime = searchStatisticResourceInfoRequest.startTime;
                    endTime = searchStatisticResourceInfoRequest.endTime;
                    category = searchStatisticResourceInfoRequest.category;
                    offset = searchStatisticResourceInfoRequest.offset;
                    limit = searchStatisticResourceInfoRequest.limit;
                } else {
                    timeUnit = searchStatisticResourceInfoRequest['timeUnit'];
                    startTime = searchStatisticResourceInfoRequest['startTime'];
                    endTime = searchStatisticResourceInfoRequest['endTime'];
                    category = searchStatisticResourceInfoRequest['category'];
                    offset = searchStatisticResourceInfoRequest['offset'];
                    limit = searchStatisticResourceInfoRequest['limit'];
                }
            }

        
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling searchStatisticResourceInfo.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['timeUnit'] = timeUnit;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling searchStatisticResourceInfo.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling searchStatisticResourceInfo.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling searchStatisticResourceInfo.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询企业内用户数据统计：
         * * 查询会议用户登录数据，按日/按月统计。
         * * 查询会议用户激活数据，按日/按月统计。
         * * 查询会议用户登录设备数据，按日/按月统计。
         * &gt; 仅旗舰版企业/标准版企业的企业管理员有权限查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchStatisticUserInfo(searchStatisticUserInfoRequest?: SearchStatisticUserInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/metrics/dashboard/statistic/user/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let timeUnit;
            
            let startTime;
            
            let endTime;
            
            let category;
            
            let offset;
            
            let limit;

            if (searchStatisticUserInfoRequest !== null && searchStatisticUserInfoRequest !== undefined) {
                if (searchStatisticUserInfoRequest instanceof SearchStatisticUserInfoRequest) {
                    timeUnit = searchStatisticUserInfoRequest.timeUnit;
                    startTime = searchStatisticUserInfoRequest.startTime;
                    endTime = searchStatisticUserInfoRequest.endTime;
                    category = searchStatisticUserInfoRequest.category;
                    offset = searchStatisticUserInfoRequest.offset;
                    limit = searchStatisticUserInfoRequest.limit;
                } else {
                    timeUnit = searchStatisticUserInfoRequest['timeUnit'];
                    startTime = searchStatisticUserInfoRequest['startTime'];
                    endTime = searchStatisticUserInfoRequest['endTime'];
                    category = searchStatisticUserInfoRequest['category'];
                    offset = searchStatisticUserInfoRequest['offset'];
                    limit = searchStatisticUserInfoRequest['limit'];
                }
            }

        
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling searchStatisticUserInfo.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['timeUnit'] = timeUnit;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling searchStatisticUserInfo.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling searchStatisticUserInfo.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling searchStatisticUserInfo.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): MeetingClient {
    return new MeetingClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}