import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AutoClassificationRequestBody } from './model/AutoClassificationRequestBody';
import { AutoClassificationResult } from './model/AutoClassificationResult';
import { AutoClassificationResultStatus } from './model/AutoClassificationResultStatus';
import { BankcardRequestBody } from './model/BankcardRequestBody';
import { BankcardResult } from './model/BankcardResult';
import { BeneficiaryItem } from './model/BeneficiaryItem';
import { BusinessCardRequestBody } from './model/BusinessCardRequestBody';
import { BusinessCardResult } from './model/BusinessCardResult';
import { BusinessLicenseRequestBody } from './model/BusinessLicenseRequestBody';
import { BusinessLicenseResult } from './model/BusinessLicenseResult';
import { CambodianIdCardRequestBody } from './model/CambodianIdCardRequestBody';
import { CambodianIdCardResult } from './model/CambodianIdCardResult';
import { ChileIdCardConfidence } from './model/ChileIdCardConfidence';
import { ChileIdCardRequestBody } from './model/ChileIdCardRequestBody';
import { ChileIdCardResult } from './model/ChileIdCardResult';
import { DriverLicenseRequestBody } from './model/DriverLicenseRequestBody';
import { DriverLicenseResult } from './model/DriverLicenseResult';
import { ExitEntryPermitConfidence } from './model/ExitEntryPermitConfidence';
import { ExitEntryPermitEndorsementInfo } from './model/ExitEntryPermitEndorsementInfo';
import { ExitEntryPermitRequestBody } from './model/ExitEntryPermitRequestBody';
import { ExitEntryPermitResult } from './model/ExitEntryPermitResult';
import { ExtraInfoList } from './model/ExtraInfoList';
import { FinancialStatementRequestBody } from './model/FinancialStatementRequestBody';
import { FinancialStatementResult } from './model/FinancialStatementResult';
import { FinancialStatementResultImageSize } from './model/FinancialStatementResultImageSize';
import { FinancialStatementWordsBlockList } from './model/FinancialStatementWordsBlockList';
import { FinancialStatementWordsRegionList } from './model/FinancialStatementWordsRegionList';
import { FlightItineraryRequestBody } from './model/FlightItineraryRequestBody';
import { FlightItineraryResult } from './model/FlightItineraryResult';
import { GeneralTableRequestBody } from './model/GeneralTableRequestBody';
import { GeneralTableResult } from './model/GeneralTableResult';
import { GeneralTableWordsBlockList } from './model/GeneralTableWordsBlockList';
import { GeneralTextRequestBody } from './model/GeneralTextRequestBody';
import { GeneralTextResult } from './model/GeneralTextResult';
import { GeneralTextWordsBlockList } from './model/GeneralTextWordsBlockList';
import { HandwritingRequestBody } from './model/HandwritingRequestBody';
import { HandwritingResult } from './model/HandwritingResult';
import { HandwritingWordsBlockList } from './model/HandwritingWordsBlockList';
import { HealthCodeRequestBody } from './model/HealthCodeRequestBody';
import { HealthCodeResult } from './model/HealthCodeResult';
import { HealthCodeWordsBlockList } from './model/HealthCodeWordsBlockList';
import { HkIdCardRequestBody } from './model/HkIdCardRequestBody';
import { HkIdCardResult } from './model/HkIdCardResult';
import { IdCardRequestBody } from './model/IdCardRequestBody';
import { IdCardResult } from './model/IdCardResult';
import { IdDocumentRequestBody } from './model/IdDocumentRequestBody';
import { IdcardVerificationResult } from './model/IdcardVerificationResult';
import { InsuranceItem } from './model/InsuranceItem';
import { InsurancePolicyDetail } from './model/InsurancePolicyDetail';
import { InsurancePolicyRequestBody } from './model/InsurancePolicyRequestBody';
import { InsurancePolicyResult } from './model/InsurancePolicyResult';
import { InsurantItem } from './model/InsurantItem';
import { InvoiceVerificationRequestBody } from './model/InvoiceVerificationRequestBody';
import { ItemList } from './model/ItemList';
import { ItineraryList } from './model/ItineraryList';
import { LicensePlateRequestBody } from './model/LicensePlateRequestBody';
import { LicensePlateResult } from './model/LicensePlateResult';
import { MacaoIdCardRequestBody } from './model/MacaoIdCardRequestBody';
import { MacaoIdCardResult } from './model/MacaoIdCardResult';
import { MainlandTravelPermitConfidence } from './model/MainlandTravelPermitConfidence';
import { MainlandTravelPermitRequestBody } from './model/MainlandTravelPermitRequestBody';
import { MainlandTravelPermitResult } from './model/MainlandTravelPermitResult';
import { MvsInvoiceRequestBody } from './model/MvsInvoiceRequestBody';
import { MvsInvoiceResult } from './model/MvsInvoiceResult';
import { MyanmarDriverLicenseConfidence } from './model/MyanmarDriverLicenseConfidence';
import { MyanmarDriverLicenseRequestBody } from './model/MyanmarDriverLicenseRequestBody';
import { MyanmarDriverLicenseResult } from './model/MyanmarDriverLicenseResult';
import { MyanmarIdcardConfidence } from './model/MyanmarIdcardConfidence';
import { MyanmarIdcardRequestBody } from './model/MyanmarIdcardRequestBody';
import { MyanmarIdcardResult } from './model/MyanmarIdcardResult';
import { PassportRequestBody } from './model/PassportRequestBody';
import { PassportResult } from './model/PassportResult';
import { PcrTestRecordConfidence } from './model/PcrTestRecordConfidence';
import { PcrTestRecordRequestBody } from './model/PcrTestRecordRequestBody';
import { PcrTestRecordResult } from './model/PcrTestRecordResult';
import { PcrTestRecordWordsBlockList } from './model/PcrTestRecordWordsBlockList';
import { QualificationCategory } from './model/QualificationCategory';
import { QualificationCategoryConfidence } from './model/QualificationCategoryConfidence';
import { QualificationCertificateRequestBody } from './model/QualificationCertificateRequestBody';
import { QualificationCertificateResult } from './model/QualificationCertificateResult';
import { QualificationConfidence } from './model/QualificationConfidence';
import { QuotaInvoiceRequestBody } from './model/QuotaInvoiceRequestBody';
import { QuotaInvoiceResult } from './model/QuotaInvoiceResult';
import { RecognizeAutoClassificationRequest } from './model/RecognizeAutoClassificationRequest';
import { RecognizeAutoClassificationResponse } from './model/RecognizeAutoClassificationResponse';
import { RecognizeBankcardRequest } from './model/RecognizeBankcardRequest';
import { RecognizeBankcardResponse } from './model/RecognizeBankcardResponse';
import { RecognizeBusinessCardRequest } from './model/RecognizeBusinessCardRequest';
import { RecognizeBusinessCardResponse } from './model/RecognizeBusinessCardResponse';
import { RecognizeBusinessLicenseRequest } from './model/RecognizeBusinessLicenseRequest';
import { RecognizeBusinessLicenseResponse } from './model/RecognizeBusinessLicenseResponse';
import { RecognizeCambodianIdCardRequest } from './model/RecognizeCambodianIdCardRequest';
import { RecognizeCambodianIdCardResponse } from './model/RecognizeCambodianIdCardResponse';
import { RecognizeChileIdCardRequest } from './model/RecognizeChileIdCardRequest';
import { RecognizeChileIdCardResponse } from './model/RecognizeChileIdCardResponse';
import { RecognizeDriverLicenseRequest } from './model/RecognizeDriverLicenseRequest';
import { RecognizeDriverLicenseResponse } from './model/RecognizeDriverLicenseResponse';
import { RecognizeExitEntryPermitRequest } from './model/RecognizeExitEntryPermitRequest';
import { RecognizeExitEntryPermitResponse } from './model/RecognizeExitEntryPermitResponse';
import { RecognizeFinancialStatementRequest } from './model/RecognizeFinancialStatementRequest';
import { RecognizeFinancialStatementResponse } from './model/RecognizeFinancialStatementResponse';
import { RecognizeFlightItineraryRequest } from './model/RecognizeFlightItineraryRequest';
import { RecognizeFlightItineraryResponse } from './model/RecognizeFlightItineraryResponse';
import { RecognizeGeneralTableRequest } from './model/RecognizeGeneralTableRequest';
import { RecognizeGeneralTableResponse } from './model/RecognizeGeneralTableResponse';
import { RecognizeGeneralTextRequest } from './model/RecognizeGeneralTextRequest';
import { RecognizeGeneralTextResponse } from './model/RecognizeGeneralTextResponse';
import { RecognizeHandwritingRequest } from './model/RecognizeHandwritingRequest';
import { RecognizeHandwritingResponse } from './model/RecognizeHandwritingResponse';
import { RecognizeHealthCodeRequest } from './model/RecognizeHealthCodeRequest';
import { RecognizeHealthCodeResponse } from './model/RecognizeHealthCodeResponse';
import { RecognizeHkIdCardRequest } from './model/RecognizeHkIdCardRequest';
import { RecognizeHkIdCardResponse } from './model/RecognizeHkIdCardResponse';
import { RecognizeIdCardRequest } from './model/RecognizeIdCardRequest';
import { RecognizeIdCardResponse } from './model/RecognizeIdCardResponse';
import { RecognizeIdDocumentRequest } from './model/RecognizeIdDocumentRequest';
import { RecognizeIdDocumentResponse } from './model/RecognizeIdDocumentResponse';
import { RecognizeInsurancePolicyRequest } from './model/RecognizeInsurancePolicyRequest';
import { RecognizeInsurancePolicyResponse } from './model/RecognizeInsurancePolicyResponse';
import { RecognizeInvoiceVerificationRequest } from './model/RecognizeInvoiceVerificationRequest';
import { RecognizeInvoiceVerificationResponse } from './model/RecognizeInvoiceVerificationResponse';
import { RecognizeLicensePlateRequest } from './model/RecognizeLicensePlateRequest';
import { RecognizeLicensePlateResponse } from './model/RecognizeLicensePlateResponse';
import { RecognizeMacaoIdCardRequest } from './model/RecognizeMacaoIdCardRequest';
import { RecognizeMacaoIdCardResponse } from './model/RecognizeMacaoIdCardResponse';
import { RecognizeMainlandTravelPermitRequest } from './model/RecognizeMainlandTravelPermitRequest';
import { RecognizeMainlandTravelPermitResponse } from './model/RecognizeMainlandTravelPermitResponse';
import { RecognizeMvsInvoiceRequest } from './model/RecognizeMvsInvoiceRequest';
import { RecognizeMvsInvoiceResponse } from './model/RecognizeMvsInvoiceResponse';
import { RecognizeMyanmarDriverLicenseRequest } from './model/RecognizeMyanmarDriverLicenseRequest';
import { RecognizeMyanmarDriverLicenseResponse } from './model/RecognizeMyanmarDriverLicenseResponse';
import { RecognizeMyanmarIdcardRequest } from './model/RecognizeMyanmarIdcardRequest';
import { RecognizeMyanmarIdcardResponse } from './model/RecognizeMyanmarIdcardResponse';
import { RecognizePassportRequest } from './model/RecognizePassportRequest';
import { RecognizePassportResponse } from './model/RecognizePassportResponse';
import { RecognizePcrTestRecordRequest } from './model/RecognizePcrTestRecordRequest';
import { RecognizePcrTestRecordResponse } from './model/RecognizePcrTestRecordResponse';
import { RecognizeQualificationCertificateRequest } from './model/RecognizeQualificationCertificateRequest';
import { RecognizeQualificationCertificateResponse } from './model/RecognizeQualificationCertificateResponse';
import { RecognizeQuotaInvoiceRequest } from './model/RecognizeQuotaInvoiceRequest';
import { RecognizeQuotaInvoiceResponse } from './model/RecognizeQuotaInvoiceResponse';
import { RecognizeTaxiInvoiceRequest } from './model/RecognizeTaxiInvoiceRequest';
import { RecognizeTaxiInvoiceResponse } from './model/RecognizeTaxiInvoiceResponse';
import { RecognizeThailandIdcardRequest } from './model/RecognizeThailandIdcardRequest';
import { RecognizeThailandIdcardResponse } from './model/RecognizeThailandIdcardResponse';
import { RecognizeThailandLicensePlateRequest } from './model/RecognizeThailandLicensePlateRequest';
import { RecognizeThailandLicensePlateResponse } from './model/RecognizeThailandLicensePlateResponse';
import { RecognizeTollInvoiceRequest } from './model/RecognizeTollInvoiceRequest';
import { RecognizeTollInvoiceResponse } from './model/RecognizeTollInvoiceResponse';
import { RecognizeTrainTicketRequest } from './model/RecognizeTrainTicketRequest';
import { RecognizeTrainTicketResponse } from './model/RecognizeTrainTicketResponse';
import { RecognizeTransportationLicenseRequest } from './model/RecognizeTransportationLicenseRequest';
import { RecognizeTransportationLicenseResponse } from './model/RecognizeTransportationLicenseResponse';
import { RecognizeVatInvoiceRequest } from './model/RecognizeVatInvoiceRequest';
import { RecognizeVatInvoiceResponse } from './model/RecognizeVatInvoiceResponse';
import { RecognizeVehicleLicenseRequest } from './model/RecognizeVehicleLicenseRequest';
import { RecognizeVehicleLicenseResponse } from './model/RecognizeVehicleLicenseResponse';
import { RecognizeVinRequest } from './model/RecognizeVinRequest';
import { RecognizeVinResponse } from './model/RecognizeVinResponse';
import { RecognizeWaybillElectronicRequest } from './model/RecognizeWaybillElectronicRequest';
import { RecognizeWaybillElectronicResponse } from './model/RecognizeWaybillElectronicResponse';
import { RecognizeWebImageRequest } from './model/RecognizeWebImageRequest';
import { RecognizeWebImageResponse } from './model/RecognizeWebImageResponse';
import { TaxiInvoiceRequestBody } from './model/TaxiInvoiceRequestBody';
import { TaxiInvoiceResult } from './model/TaxiInvoiceResult';
import { ThailandIdcardConfidence } from './model/ThailandIdcardConfidence';
import { ThailandIdcardRequestBody } from './model/ThailandIdcardRequestBody';
import { ThailandIdcardResult } from './model/ThailandIdcardResult';
import { ThailandLicensePlateItem } from './model/ThailandLicensePlateItem';
import { ThailandLicensePlateRequestBody } from './model/ThailandLicensePlateRequestBody';
import { TollInvoiceRequestBody } from './model/TollInvoiceRequestBody';
import { TollInvoiceResult } from './model/TollInvoiceResult';
import { TrainTicketRequestBody } from './model/TrainTicketRequestBody';
import { TrainTicketResult } from './model/TrainTicketResult';
import { TransportationLicenseRequestBody } from './model/TransportationLicenseRequestBody';
import { TransportationLicenseResult } from './model/TransportationLicenseResult';
import { VINResult } from './model/VINResult';
import { VatInvoiceRequestBody } from './model/VatInvoiceRequestBody';
import { VatInvoiceResult } from './model/VatInvoiceResult';
import { VehicleLicenseRequestBody } from './model/VehicleLicenseRequestBody';
import { VehicleLicenseResult } from './model/VehicleLicenseResult';
import { VinRequestBody } from './model/VinRequestBody';
import { WaybillElectronicRequestBody } from './model/WaybillElectronicRequestBody';
import { WaybillElectronicResult } from './model/WaybillElectronicResult';
import { WebImageRequestBody } from './model/WebImageRequestBody';
import { WebImageResult } from './model/WebImageResult';
import { WebImageWordsBlockList } from './model/WebImageWordsBlockList';
import { WordsListIem } from './model/WordsListIem';
import { WordsRegionList } from './model/WordsRegionList';

export class OcrClient {
    public static newBuilder(): ClientBuilder<OcrClient> {
        return new ClientBuilder<OcrClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 检测定位图片上指定要识别的票证（票据、证件或其他文字载体），并对其进行结构化识别。接口以列表形式返回图片上要识别票证的位置坐标、结构化识别的内容以及对应的类别。
     * 
     * 计费次数说明：
     * 
     * 只对识别成功的票证进行计费，识别失败的票证不计费。例如图片中包含三张票证，有两张识别成功，一张识别失败，此时接口计费两次。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 智能分类识别
     * @param {AutoClassificationRequestBody} autoClassificationRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeAutoClassification(recognizeAutoClassificationRequest?: RecognizeAutoClassificationRequest): Promise<RecognizeAutoClassificationResponse> {
        const options = ParamCreater().recognizeAutoClassification(recognizeAutoClassificationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别银行卡上的关键文字信息，并返回识别的结构化结果。
     * 
     * 说明：
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 银行卡识别
     * @param {BankcardRequestBody} bankcardRequestBody This is a auto create Body Object Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeBankcard(recognizeBankcardRequest?: RecognizeBankcardRequest): Promise<RecognizeBankcardResponse> {
        const options = ParamCreater().recognizeBankcard(recognizeBankcardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别名片图片上的文字信息，并返回识别的结构化结果。支持对多种不同版式名片进行结构化信息提取。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 名片识别
     * @param {BusinessCardRequestBody} businessCardRequestBody This is a businesscard Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeBusinessCard(recognizeBusinessCardRequest?: RecognizeBusinessCardRequest): Promise<RecognizeBusinessCardResponse> {
        const options = ParamCreater().recognizeBusinessCard(recognizeBusinessCardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别营业执照首页图片中的文字信息，并返回识别的结构化结果。
     * 
     * 说明： 
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 营业执照识别
     * @param {BusinessLicenseRequestBody} businessLicenseRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeBusinessLicense(recognizeBusinessLicenseRequest?: RecognizeBusinessLicenseRequest): Promise<RecognizeBusinessLicenseResponse> {
        const options = ParamCreater().recognizeBusinessLicense(recognizeBusinessLicenseRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别柬文身份证图片中的文字内容，并将识别的结构化结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 柬文身份证识别
     * @param {CambodianIdCardRequestBody} cambodianIdCardRequestBody This is a Cambodian ID Card OCR Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeCambodianIdCard(recognizeCambodianIdCardRequest?: RecognizeCambodianIdCardRequest): Promise<RecognizeCambodianIdCardResponse> {
        const options = ParamCreater().recognizeCambodianIdCard(recognizeCambodianIdCardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别智利身份证图片中的文字内容，并返回识别的结构化结果。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 智利身份证识别
     * @param {ChileIdCardRequestBody} chileIdCardRequestBody This is a chile id-card Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeChileIdCard(recognizeChileIdCardRequest?: RecognizeChileIdCardRequest): Promise<RecognizeChileIdCardResponse> {
        const options = ParamCreater().recognizeChileIdCard(recognizeChileIdCardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别用户上传的驾驶证图片（或者用户提供的华为云上OBS的驾驶证图片文件的URL）中主页与副页的文字内容，并将识别的结果返回给用户。
     * 
     * 说明： 
     * 
     * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 驾驶证识别
     * @param {DriverLicenseRequestBody} driverLicenseRequestBody This is a driverlicense Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeDriverLicense(recognizeDriverLicenseRequest?: RecognizeDriverLicenseRequest): Promise<RecognizeDriverLicenseResponse> {
        const options = ParamCreater().recognizeDriverLicense(recognizeDriverLicenseRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别往来港澳台证件图片中的文字内容，并将识别的结构化结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 往来港澳台通行证识别
     * @param {ExitEntryPermitRequestBody} exitEntryPermitRequestBody This is a Exit-Entry Permit for Traveling to and from Hong Kong, Macao, and Taiwan Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeExitEntryPermit(recognizeExitEntryPermitRequest?: RecognizeExitEntryPermitRequest): Promise<RecognizeExitEntryPermitResponse> {
        const options = ParamCreater().recognizeExitEntryPermit(recognizeExitEntryPermitRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别用户上传的表格图片中的文字内容，并将识别的结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 财务报表识别
     * @param {FinancialStatementRequestBody} financialStatementRequestBody This is a financial statement Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeFinancialStatement(recognizeFinancialStatementRequest?: RecognizeFinancialStatementRequest): Promise<RecognizeFinancialStatementResponse> {
        const options = ParamCreater().recognizeFinancialStatement(recognizeFinancialStatementRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别飞机行程单中的文字信息，并返回识别的结构化结果。
     * 
     * 说明：
     * 
     * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 飞机行程单识别
     * @param {FlightItineraryRequestBody} [flightItineraryRequestBody] This is a flightitinerary Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeFlightItinerary(recognizeFlightItineraryRequest?: RecognizeFlightItineraryRequest): Promise<RecognizeFlightItineraryResponse> {
        const options = ParamCreater().recognizeFlightItinerary(recognizeFlightItineraryRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别用于识别用户上传的通用表格图片（或者用户提供的华为云上OBS的通用表格图片文件的URL）中的文字内容，并将识别的结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 通用表格识别
     * @param {GeneralTableRequestBody} [generalTableRequestBody] This is a generaltable Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeGeneralTable(recognizeGeneralTableRequest?: RecognizeGeneralTableRequest): Promise<RecognizeGeneralTableResponse> {
        const options = ParamCreater().recognizeGeneralTable(recognizeGeneralTableRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别图片上的文字信息，返回识别的文字和坐标。支持扫描文件、电子文档、书籍、票据和表单等多种场景的文字识别。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 通用文字识别
     * @param {GeneralTextRequestBody} [generalTextRequestBody] This is a generaltext Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeGeneralText(recognizeGeneralTextRequest?: RecognizeGeneralTextRequest): Promise<RecognizeGeneralTextResponse> {
        const options = ParamCreater().recognizeGeneralText(recognizeGeneralTextRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别文档中的手写文字信息，并将识别的结构化结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 手写文字识别
     * @param {HandwritingRequestBody} handwritingRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeHandwriting(recognizeHandwritingRequest?: RecognizeHandwritingRequest): Promise<RecognizeHandwritingResponse> {
        const options = ParamCreater().recognizeHandwriting(recognizeHandwritingRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别防疫健康码中的文字信息，并将识别的结构化结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 防疫健康码识别
     * @param {HealthCodeRequestBody} [healthCodeRequestBody] This is a healthcode Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeHealthCode(recognizeHealthCodeRequest?: RecognizeHealthCodeRequest): Promise<RecognizeHealthCodeResponse> {
        const options = ParamCreater().recognizeHealthCode(recognizeHealthCodeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别香港身份证中的文字内容，并将识别的结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 香港身份证识别
     * @param {HkIdCardRequestBody} hkIdCardRequestBody This is a hk id card Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeHkIdCard(recognizeHkIdCardRequest?: RecognizeHkIdCardRequest): Promise<RecognizeHkIdCardResponse> {
        const options = ParamCreater().recognizeHkIdCard(recognizeHkIdCardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别身份证图片中的文字内容，并将识别的结果返回给用户。
     * 
     * 说明： 
     * 
     * 身份证识别支持中华人民共和国居民身份证识别。
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 身份证识别
     * @param {IdCardRequestBody} idCardRequestBody This is a idcard Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeIdCard(recognizeIdCardRequest?: RecognizeIdCardRequest): Promise<RecognizeIdCardResponse> {
        const options = ParamCreater().recognizeIdCard(recognizeIdCardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别身份证件图像，并将识别的结构化结果返回给用户。支持多个国家/地区的身份证、驾驶证和护照，具体国家/地区和证件列表详见表1国家/地区和证件列表。
     * 
     * **表1国家/地区和证件列表**
     * 
     * | 国家/地区  | 英文名称    | 国家/地区代码 country_region | 支持证件类型 id_type      |
     * | ---------- | ----------- | ---------------------------- | ------------------------- |
     * | 越南       | Vietnam     | VNM                          | PP、DL、ID                |
     * | 印度       | India       | IND                          | PP                        |
     * | 菲律宾     | Philippines | PHL                          | PP、DL、ID（仅支持UUMID） |
     * | 阿尔巴尼亚 | Albania     | ALB                          | PP、DL、ID                |
     * | 巴西       | BRAZIL      | BRA                          | PP                        |
     * | 印度尼西亚 | INDONESIA   | IDN                          | PP                        |
     * | 马来西亚   | MALAYSIA    | MYS                          | PP                        |
     * | 尼日利亚   | NIGERIA     | NGA                          | PP                        |
     * | 巴基斯坦   | PAKISTAN    | PAK                          | PP                        |
     * | 俄罗斯     | RUSSIA      | RUS                          | PP（仅支持国际标准版本）  |
     * | 中国台湾   | TAIWAN      | TWN                          | PP                        |
     * | 乌克兰     | UKRAINE     | UKR                          | PP                        |
     * | 泰国       | THAILAND    | THA                          | ID、PP                    |
     * | 智利       | CHILE       | CHL                          | ID、PP                    |
     * | 中国香港   | HONGKONG    | HKG                          | ID                        |
     * 
     * - PP: passport,国际护照
     * - DL: driving license,驾驶证
     * - ID: identification card,各国颁发的身份证类型证件，比如身份证、选民证、社保卡等。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 通用证件识别
     * @param {IdDocumentRequestBody} idDocumentRequestBody This is a General Identity Document Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeIdDocument(recognizeIdDocumentRequest?: RecognizeIdDocumentRequest): Promise<RecognizeIdDocumentResponse> {
        const options = ParamCreater().recognizeIdDocument(recognizeIdDocumentRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别保险单图片上的文字信息，并将识别的结构化结果返回给用户。支持对多板式保险单的扫描图片及手机照片进行结构化信息提取。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 保险单识别
     * @param {InsurancePolicyRequestBody} insurancePolicyRequestBody This is a insurance policy request Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeInsurancePolicy(recognizeInsurancePolicyRequest?: RecognizeInsurancePolicyRequest): Promise<RecognizeInsurancePolicyResponse> {
        const options = ParamCreater().recognizeInsurancePolicy(recognizeInsurancePolicyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 发票验真服务支持9种增值税发票的信息核验，包括增值税专用发票、增值税普通发票、增值税普通发票（卷式）、增值税电子专用发票、增值税电子普通发票、增值税电子普通发票（通行费）、二手车销售统一发票、机动车销售统一发票、区块链电子发票，支持返回票面的全部信息。该接口的使用限制请参见[约束与限制](https://support.huaweicloud.com/productdesc-ocr/ocr_01_0006.html)，详细使用指导请参见[OCR服务使用简介](https://support.huaweicloud.com/qs-ocr/ocr_05_0001.html)章节。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 发票验真
     * @param {InvoiceVerificationRequestBody} invoiceVerificationRequestBody This is a invoice verification Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeInvoiceVerification(recognizeInvoiceVerificationRequest?: RecognizeInvoiceVerificationRequest): Promise<RecognizeInvoiceVerificationResponse> {
        const options = ParamCreater().recognizeInvoiceVerification(recognizeInvoiceVerificationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别输入图片中的车牌信息，并返回其坐标和内容。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 车牌识别
     * @param {LicensePlateRequestBody} licensePlateRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeLicensePlate(recognizeLicensePlateRequest?: RecognizeLicensePlateRequest): Promise<RecognizeLicensePlateResponse> {
        const options = ParamCreater().recognizeLicensePlate(recognizeLicensePlateRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别澳门身份证图片中的文字内容，并将识别的结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 澳门身份证识别
     * @param {MacaoIdCardRequestBody} macaoIdCardRequestBody This is a macao id card Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeMacaoIdCard(recognizeMacaoIdCardRequest?: RecognizeMacaoIdCardRequest): Promise<RecognizeMacaoIdCardResponse> {
        const options = ParamCreater().recognizeMacaoIdCard(recognizeMacaoIdCardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别港澳居民来往内地通行证上的文字内容，并将识别的结构化结果返回给用户。支持港澳居民来往内地通行证和台湾居民来往内地通行证两种卡证。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 港澳台居民来往内地通行证识别
     * @param {MainlandTravelPermitRequestBody} mainlandTravelPermitRequestBody This is a Mainland Travel Permit for Hong Kong, Macao, and Taiwan Residents Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeMainlandTravelPermit(recognizeMainlandTravelPermitRequest?: RecognizeMainlandTravelPermitRequest): Promise<RecognizeMainlandTravelPermitResponse> {
        const options = ParamCreater().recognizeMainlandTravelPermit(recognizeMainlandTravelPermitRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别机动车销售发票图片中的文字内容，并将识别的结果返回给用户。
     * 
     * 说明：
     * 
     * 该增值税发票仅限于中华人民共和国境内使用的增值税发票。
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 机动车销售发票识别
     * @param {MvsInvoiceRequestBody} mvsInvoiceRequestBody This is a MvsInvoice Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeMvsInvoice(recognizeMvsInvoiceRequest?: RecognizeMvsInvoiceRequest): Promise<RecognizeMvsInvoiceResponse> {
        const options = ParamCreater().recognizeMvsInvoice(recognizeMvsInvoiceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别缅甸驾驶证中的文字信息，并返回识别的结构化结果。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 缅文驾驶证识别
     * @param {MyanmarDriverLicenseRequestBody} myanmarDriverLicenseRequestBody This is a Myanmar driver license Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeMyanmarDriverLicense(recognizeMyanmarDriverLicenseRequest?: RecognizeMyanmarDriverLicenseRequest): Promise<RecognizeMyanmarDriverLicenseResponse> {
        const options = ParamCreater().recognizeMyanmarDriverLicense(recognizeMyanmarDriverLicenseRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别缅文身份证中的文字信息，并返回识别的结构化结果。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 缅文身份证识别
     * @param {MyanmarIdcardRequestBody} myanmarIdcardRequestBody This is a Myanmar Idcard Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeMyanmarIdcard(recognizeMyanmarIdcardRequest?: RecognizeMyanmarIdcardRequest): Promise<RecognizeMyanmarIdcardResponse> {
        const options = ParamCreater().recognizeMyanmarIdcard(recognizeMyanmarIdcardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别用户上传的护照首页图片中的文字信息，并返回识别的结构化结果。当前版本支持中国护照的全字段识别。外国护照支持护照下方两行国际标准化的机读码识别，并可从中提取6-7个关键字段信息。
     * 
     * 说明：
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 护照识别
     * @param {PassportRequestBody} passportRequestBody This is a Passport Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizePassport(recognizePassportRequest?: RecognizePassportRequest): Promise<RecognizePassportResponse> {
        const options = ParamCreater().recognizePassport(recognizePassportRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别核酸检测记录中的文字信息，并将识别的结构化结果返回给用户。PCR，全称Polymerase chain reaction,即聚合酶链式反应.PCR-test也为大众所认知为新型冠状病毒核酸检测测试。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 核酸检测记录识别
     * @param {PcrTestRecordRequestBody} [pcrTestRecordRequestBody] This is a pcr test record Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizePcrTestRecord(recognizePcrTestRecordRequest?: RecognizePcrTestRecordRequest): Promise<RecognizePcrTestRecordResponse> {
        const options = ParamCreater().recognizePcrTestRecord(recognizePcrTestRecordRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别道路运输从业资格证上的关键文字信息，并返回识别的结构化结果。
     * 
     * 说明：
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 从业资格证识别
     * @param {QualificationCertificateRequestBody} qualificationCertificateRequestBody This is a auto create Body Object Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeQualificationCertificate(recognizeQualificationCertificateRequest?: RecognizeQualificationCertificateRequest): Promise<RecognizeQualificationCertificateResponse> {
        const options = ParamCreater().recognizeQualificationCertificate(recognizeQualificationCertificateRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别定额发票中的文字信息，并返回识别的结构化结果。
     * 
     * 说明： 
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 定额发票识别
     * @param {QuotaInvoiceRequestBody} quotaInvoiceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeQuotaInvoice(recognizeQuotaInvoiceRequest?: RecognizeQuotaInvoiceRequest): Promise<RecognizeQuotaInvoiceResponse> {
        const options = ParamCreater().recognizeQuotaInvoice(recognizeQuotaInvoiceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别出租车发票中的文字信息，并返回识别的结构化结果。
     * 
     * 说明：
     * 
     * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 出租车发票识别
     * @param {TaxiInvoiceRequestBody} taxiInvoiceRequestBody This is a taxiinvoice Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeTaxiInvoice(recognizeTaxiInvoiceRequest?: RecognizeTaxiInvoiceRequest): Promise<RecognizeTaxiInvoiceResponse> {
        const options = ParamCreater().recognizeTaxiInvoice(recognizeTaxiInvoiceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别泰国身份证中的文字信息，并返回识别的结构化结果。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 泰文身份证识别
     * @param {ThailandIdcardRequestBody} thailandIdcardRequestBody This is a Thailand Idcard Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeThailandIdcard(recognizeThailandIdcardRequest?: RecognizeThailandIdcardRequest): Promise<RecognizeThailandIdcardResponse> {
        const options = ParamCreater().recognizeThailandIdcard(recognizeThailandIdcardRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别泰国车牌图片中的车牌信息，并返回识别的结构化结果。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 泰国车牌识别
     * @param {ThailandLicensePlateRequestBody} thailandLicensePlateRequestBody This is a thailand license plate Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeThailandLicensePlate(recognizeThailandLicensePlateRequest?: RecognizeThailandLicensePlateRequest): Promise<RecognizeThailandLicensePlateResponse> {
        const options = ParamCreater().recognizeThailandLicensePlate(recognizeThailandLicensePlateRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别车辆通行费发票中的文字信息，并返回识别的结构化结果。
     * 
     * 说明：
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 车辆通行费发票识别
     * @param {TollInvoiceRequestBody} tollInvoiceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeTollInvoice(recognizeTollInvoiceRequest?: RecognizeTollInvoiceRequest): Promise<RecognizeTollInvoiceResponse> {
        const options = ParamCreater().recognizeTollInvoice(recognizeTollInvoiceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别火车票中的文字信息，并返回识别的结构化结果。
     * 
     * 说明：
     * 
     * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 火车票识别
     * @param {TrainTicketRequestBody} trainTicketRequestBody This is a train ticket Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeTrainTicket(recognizeTrainTicketRequest?: RecognizeTrainTicketRequest): Promise<RecognizeTrainTicketResponse> {
        const options = ParamCreater().recognizeTrainTicket(recognizeTrainTicketRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别道路运输证首页中的文字信息，并返回识别的结构化结果。
     * 
     * 说明： 如果图片中包含多张卡证票据，请调用智能分类识别服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 道路运输证识别
     * @param {TransportationLicenseRequestBody} transportationLicenseRequestBody This is a train ticket Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeTransportationLicense(recognizeTransportationLicenseRequest?: RecognizeTransportationLicenseRequest): Promise<RecognizeTransportationLicenseResponse> {
        const options = ParamCreater().recognizeTransportationLicense(recognizeTransportationLicenseRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别增值税发票的类别，以及图片中的文字内容，并以json格式返回识别的结构化结果，不支持真伪验证。该接口的使用限制请参见[约束与限制](https://support.huaweicloud.com/productdesc-ocr/ocr_01_0006.html#section15)，详细使用指导请参见[OCR服务使用简介](https://support.huaweicloud.com/qs-ocr/ocr_05_0001.html)章节。
     * 
     * 说明：
     * 
     * 该增值税发票仅限于中华人民共和国境内使用的增值税发票。
     * 
     * 支持的增值税发票包括：增值税专用发票、增值税普通发票、增值税电子普通发票、增值税电子专用发票、增值税电子普通发票（通行费）、增值税普通发票（卷票）。
     * 
     * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 增值税发票识别
     * @param {VatInvoiceRequestBody} vatInvoiceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeVatInvoice(recognizeVatInvoiceRequest?: RecognizeVatInvoiceRequest): Promise<RecognizeVatInvoiceResponse> {
        const options = ParamCreater().recognizeVatInvoice(recognizeVatInvoiceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别用户上传的行驶证图片（或者用户提供的华为云上OBS的行驶证图片文件的URL）中主页和副页的文字内容，并将识别的结果返回给用户。
     * 
     * 说明：
     * 
     * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 行驶证识别
     * @param {VehicleLicenseRequestBody} vehicleLicenseRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeVehicleLicense(recognizeVehicleLicenseRequest?: RecognizeVehicleLicenseRequest): Promise<RecognizeVehicleLicenseResponse> {
        const options = ParamCreater().recognizeVehicleLicense(recognizeVehicleLicenseRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别用户上传的韵达电子面单图片中的文字内容，并将识别的结果以json格式返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 电子面单识别
     * @param {WaybillElectronicRequestBody} waybillElectronicRequestBody This is a thailand license plate Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeWaybillElectronic(recognizeWaybillElectronicRequest?: RecognizeWaybillElectronicRequest): Promise<RecognizeWaybillElectronicResponse> {
        const options = ParamCreater().recognizeWaybillElectronic(recognizeWaybillElectronicRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别网络图片中的文字内容，并返回识别的结构化结果。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 网络图片识别
     * @param {WebImageRequestBody} webImageRequestBody This is a Web Image Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeWebImage(recognizeWebImageRequest?: RecognizeWebImageRequest): Promise<RecognizeWebImageResponse> {
        const options = ParamCreater().recognizeWebImage(recognizeWebImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 识别图片中的车架号信息，并将识别结果返回给用户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary VIN码识别
     * @param {VinRequestBody} vinRequestBody This is a Vin Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeVin(recognizeVinRequest?: RecognizeVinRequest): Promise<RecognizeVinResponse> {
        const options = ParamCreater().recognizeVin(recognizeVinRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 检测定位图片上指定要识别的票证（票据、证件或其他文字载体），并对其进行结构化识别。接口以列表形式返回图片上要识别票证的位置坐标、结构化识别的内容以及对应的类别。
         * 
         * 计费次数说明：
         * 
         * 只对识别成功的票证进行计费，识别失败的票证不计费。例如图片中包含三张票证，有两张识别成功，一张识别失败，此时接口计费两次。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeAutoClassification(recognizeAutoClassificationRequest?: RecognizeAutoClassificationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/auto-classification",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeAutoClassificationRequest !== null && recognizeAutoClassificationRequest !== undefined) {
                if (recognizeAutoClassificationRequest instanceof RecognizeAutoClassificationRequest) {
                    body = recognizeAutoClassificationRequest.body
                } else {
                    body = recognizeAutoClassificationRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别银行卡上的关键文字信息，并返回识别的结构化结果。
         * 
         * 说明：
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeBankcard(recognizeBankcardRequest?: RecognizeBankcardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/bankcard",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeBankcardRequest !== null && recognizeBankcardRequest !== undefined) {
                if (recognizeBankcardRequest instanceof RecognizeBankcardRequest) {
                    body = recognizeBankcardRequest.body
                } else {
                    body = recognizeBankcardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别名片图片上的文字信息，并返回识别的结构化结果。支持对多种不同版式名片进行结构化信息提取。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeBusinessCard(recognizeBusinessCardRequest?: RecognizeBusinessCardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/business-card",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeBusinessCardRequest !== null && recognizeBusinessCardRequest !== undefined) {
                if (recognizeBusinessCardRequest instanceof RecognizeBusinessCardRequest) {
                    body = recognizeBusinessCardRequest.body
                } else {
                    body = recognizeBusinessCardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别营业执照首页图片中的文字信息，并返回识别的结构化结果。
         * 
         * 说明： 
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeBusinessLicense(recognizeBusinessLicenseRequest?: RecognizeBusinessLicenseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/business-license",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeBusinessLicenseRequest !== null && recognizeBusinessLicenseRequest !== undefined) {
                if (recognizeBusinessLicenseRequest instanceof RecognizeBusinessLicenseRequest) {
                    body = recognizeBusinessLicenseRequest.body
                } else {
                    body = recognizeBusinessLicenseRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别柬文身份证图片中的文字内容，并将识别的结构化结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeCambodianIdCard(recognizeCambodianIdCardRequest?: RecognizeCambodianIdCardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/cambodian-idcard",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeCambodianIdCardRequest !== null && recognizeCambodianIdCardRequest !== undefined) {
                if (recognizeCambodianIdCardRequest instanceof RecognizeCambodianIdCardRequest) {
                    body = recognizeCambodianIdCardRequest.body
                } else {
                    body = recognizeCambodianIdCardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别智利身份证图片中的文字内容，并返回识别的结构化结果。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeChileIdCard(recognizeChileIdCardRequest?: RecognizeChileIdCardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/chile-id-card",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeChileIdCardRequest !== null && recognizeChileIdCardRequest !== undefined) {
                if (recognizeChileIdCardRequest instanceof RecognizeChileIdCardRequest) {
                    body = recognizeChileIdCardRequest.body
                } else {
                    body = recognizeChileIdCardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别用户上传的驾驶证图片（或者用户提供的华为云上OBS的驾驶证图片文件的URL）中主页与副页的文字内容，并将识别的结果返回给用户。
         * 
         * 说明： 
         * 
         * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeDriverLicense(recognizeDriverLicenseRequest?: RecognizeDriverLicenseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/driver-license",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeDriverLicenseRequest !== null && recognizeDriverLicenseRequest !== undefined) {
                if (recognizeDriverLicenseRequest instanceof RecognizeDriverLicenseRequest) {
                    body = recognizeDriverLicenseRequest.body
                } else {
                    body = recognizeDriverLicenseRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别往来港澳台证件图片中的文字内容，并将识别的结构化结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeExitEntryPermit(recognizeExitEntryPermitRequest?: RecognizeExitEntryPermitRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/exit-entry-permit",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeExitEntryPermitRequest !== null && recognizeExitEntryPermitRequest !== undefined) {
                if (recognizeExitEntryPermitRequest instanceof RecognizeExitEntryPermitRequest) {
                    body = recognizeExitEntryPermitRequest.body
                } else {
                    body = recognizeExitEntryPermitRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别用户上传的表格图片中的文字内容，并将识别的结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeFinancialStatement(recognizeFinancialStatementRequest?: RecognizeFinancialStatementRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/financial-statement",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeFinancialStatementRequest !== null && recognizeFinancialStatementRequest !== undefined) {
                if (recognizeFinancialStatementRequest instanceof RecognizeFinancialStatementRequest) {
                    body = recognizeFinancialStatementRequest.body
                } else {
                    body = recognizeFinancialStatementRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别飞机行程单中的文字信息，并返回识别的结构化结果。
         * 
         * 说明：
         * 
         * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeFlightItinerary(recognizeFlightItineraryRequest?: RecognizeFlightItineraryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/flight-itinerary",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeFlightItineraryRequest !== null && recognizeFlightItineraryRequest !== undefined) {
                if (recognizeFlightItineraryRequest instanceof RecognizeFlightItineraryRequest) {
                    body = recognizeFlightItineraryRequest.body
                } else {
                    body = recognizeFlightItineraryRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别用于识别用户上传的通用表格图片（或者用户提供的华为云上OBS的通用表格图片文件的URL）中的文字内容，并将识别的结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeGeneralTable(recognizeGeneralTableRequest?: RecognizeGeneralTableRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/general-table",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeGeneralTableRequest !== null && recognizeGeneralTableRequest !== undefined) {
                if (recognizeGeneralTableRequest instanceof RecognizeGeneralTableRequest) {
                    body = recognizeGeneralTableRequest.body
                } else {
                    body = recognizeGeneralTableRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别图片上的文字信息，返回识别的文字和坐标。支持扫描文件、电子文档、书籍、票据和表单等多种场景的文字识别。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeGeneralText(recognizeGeneralTextRequest?: RecognizeGeneralTextRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/general-text",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeGeneralTextRequest !== null && recognizeGeneralTextRequest !== undefined) {
                if (recognizeGeneralTextRequest instanceof RecognizeGeneralTextRequest) {
                    body = recognizeGeneralTextRequest.body
                } else {
                    body = recognizeGeneralTextRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别文档中的手写文字信息，并将识别的结构化结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeHandwriting(recognizeHandwritingRequest?: RecognizeHandwritingRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/handwriting",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeHandwritingRequest !== null && recognizeHandwritingRequest !== undefined) {
                if (recognizeHandwritingRequest instanceof RecognizeHandwritingRequest) {
                    body = recognizeHandwritingRequest.body
                } else {
                    body = recognizeHandwritingRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别防疫健康码中的文字信息，并将识别的结构化结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeHealthCode(recognizeHealthCodeRequest?: RecognizeHealthCodeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/health-code",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeHealthCodeRequest !== null && recognizeHealthCodeRequest !== undefined) {
                if (recognizeHealthCodeRequest instanceof RecognizeHealthCodeRequest) {
                    body = recognizeHealthCodeRequest.body
                } else {
                    body = recognizeHealthCodeRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别香港身份证中的文字内容，并将识别的结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeHkIdCard(recognizeHkIdCardRequest?: RecognizeHkIdCardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/hk-id-card",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeHkIdCardRequest !== null && recognizeHkIdCardRequest !== undefined) {
                if (recognizeHkIdCardRequest instanceof RecognizeHkIdCardRequest) {
                    body = recognizeHkIdCardRequest.body
                } else {
                    body = recognizeHkIdCardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别身份证图片中的文字内容，并将识别的结果返回给用户。
         * 
         * 说明： 
         * 
         * 身份证识别支持中华人民共和国居民身份证识别。
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeIdCard(recognizeIdCardRequest?: RecognizeIdCardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/id-card",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeIdCardRequest !== null && recognizeIdCardRequest !== undefined) {
                if (recognizeIdCardRequest instanceof RecognizeIdCardRequest) {
                    body = recognizeIdCardRequest.body
                } else {
                    body = recognizeIdCardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别身份证件图像，并将识别的结构化结果返回给用户。支持多个国家/地区的身份证、驾驶证和护照，具体国家/地区和证件列表详见表1国家/地区和证件列表。
         * 
         * **表1国家/地区和证件列表**
         * 
         * | 国家/地区  | 英文名称    | 国家/地区代码 country_region | 支持证件类型 id_type      |
         * | ---------- | ----------- | ---------------------------- | ------------------------- |
         * | 越南       | Vietnam     | VNM                          | PP、DL、ID                |
         * | 印度       | India       | IND                          | PP                        |
         * | 菲律宾     | Philippines | PHL                          | PP、DL、ID（仅支持UUMID） |
         * | 阿尔巴尼亚 | Albania     | ALB                          | PP、DL、ID                |
         * | 巴西       | BRAZIL      | BRA                          | PP                        |
         * | 印度尼西亚 | INDONESIA   | IDN                          | PP                        |
         * | 马来西亚   | MALAYSIA    | MYS                          | PP                        |
         * | 尼日利亚   | NIGERIA     | NGA                          | PP                        |
         * | 巴基斯坦   | PAKISTAN    | PAK                          | PP                        |
         * | 俄罗斯     | RUSSIA      | RUS                          | PP（仅支持国际标准版本）  |
         * | 中国台湾   | TAIWAN      | TWN                          | PP                        |
         * | 乌克兰     | UKRAINE     | UKR                          | PP                        |
         * | 泰国       | THAILAND    | THA                          | ID、PP                    |
         * | 智利       | CHILE       | CHL                          | ID、PP                    |
         * | 中国香港   | HONGKONG    | HKG                          | ID                        |
         * 
         * - PP: passport,国际护照
         * - DL: driving license,驾驶证
         * - ID: identification card,各国颁发的身份证类型证件，比如身份证、选民证、社保卡等。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeIdDocument(recognizeIdDocumentRequest?: RecognizeIdDocumentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/id-document",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeIdDocumentRequest !== null && recognizeIdDocumentRequest !== undefined) {
                if (recognizeIdDocumentRequest instanceof RecognizeIdDocumentRequest) {
                    body = recognizeIdDocumentRequest.body
                } else {
                    body = recognizeIdDocumentRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别保险单图片上的文字信息，并将识别的结构化结果返回给用户。支持对多板式保险单的扫描图片及手机照片进行结构化信息提取。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeInsurancePolicy(recognizeInsurancePolicyRequest?: RecognizeInsurancePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/insurance-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeInsurancePolicyRequest !== null && recognizeInsurancePolicyRequest !== undefined) {
                if (recognizeInsurancePolicyRequest instanceof RecognizeInsurancePolicyRequest) {
                    body = recognizeInsurancePolicyRequest.body
                } else {
                    body = recognizeInsurancePolicyRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发票验真服务支持9种增值税发票的信息核验，包括增值税专用发票、增值税普通发票、增值税普通发票（卷式）、增值税电子专用发票、增值税电子普通发票、增值税电子普通发票（通行费）、二手车销售统一发票、机动车销售统一发票、区块链电子发票，支持返回票面的全部信息。该接口的使用限制请参见[约束与限制](https://support.huaweicloud.com/productdesc-ocr/ocr_01_0006.html)，详细使用指导请参见[OCR服务使用简介](https://support.huaweicloud.com/qs-ocr/ocr_05_0001.html)章节。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeInvoiceVerification(recognizeInvoiceVerificationRequest?: RecognizeInvoiceVerificationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/invoice-verification",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeInvoiceVerificationRequest !== null && recognizeInvoiceVerificationRequest !== undefined) {
                if (recognizeInvoiceVerificationRequest instanceof RecognizeInvoiceVerificationRequest) {
                    body = recognizeInvoiceVerificationRequest.body
                } else {
                    body = recognizeInvoiceVerificationRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别输入图片中的车牌信息，并返回其坐标和内容。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeLicensePlate(recognizeLicensePlateRequest?: RecognizeLicensePlateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/license-plate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeLicensePlateRequest !== null && recognizeLicensePlateRequest !== undefined) {
                if (recognizeLicensePlateRequest instanceof RecognizeLicensePlateRequest) {
                    body = recognizeLicensePlateRequest.body
                } else {
                    body = recognizeLicensePlateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别澳门身份证图片中的文字内容，并将识别的结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeMacaoIdCard(recognizeMacaoIdCardRequest?: RecognizeMacaoIdCardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/macao-id-card",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeMacaoIdCardRequest !== null && recognizeMacaoIdCardRequest !== undefined) {
                if (recognizeMacaoIdCardRequest instanceof RecognizeMacaoIdCardRequest) {
                    body = recognizeMacaoIdCardRequest.body
                } else {
                    body = recognizeMacaoIdCardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别港澳居民来往内地通行证上的文字内容，并将识别的结构化结果返回给用户。支持港澳居民来往内地通行证和台湾居民来往内地通行证两种卡证。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeMainlandTravelPermit(recognizeMainlandTravelPermitRequest?: RecognizeMainlandTravelPermitRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/mainland-travel-permit",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeMainlandTravelPermitRequest !== null && recognizeMainlandTravelPermitRequest !== undefined) {
                if (recognizeMainlandTravelPermitRequest instanceof RecognizeMainlandTravelPermitRequest) {
                    body = recognizeMainlandTravelPermitRequest.body
                } else {
                    body = recognizeMainlandTravelPermitRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别机动车销售发票图片中的文字内容，并将识别的结果返回给用户。
         * 
         * 说明：
         * 
         * 该增值税发票仅限于中华人民共和国境内使用的增值税发票。
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeMvsInvoice(recognizeMvsInvoiceRequest?: RecognizeMvsInvoiceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/mvs-invoice",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeMvsInvoiceRequest !== null && recognizeMvsInvoiceRequest !== undefined) {
                if (recognizeMvsInvoiceRequest instanceof RecognizeMvsInvoiceRequest) {
                    body = recognizeMvsInvoiceRequest.body
                } else {
                    body = recognizeMvsInvoiceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别缅甸驾驶证中的文字信息，并返回识别的结构化结果。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeMyanmarDriverLicense(recognizeMyanmarDriverLicenseRequest?: RecognizeMyanmarDriverLicenseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/myanmar-driver-license",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeMyanmarDriverLicenseRequest !== null && recognizeMyanmarDriverLicenseRequest !== undefined) {
                if (recognizeMyanmarDriverLicenseRequest instanceof RecognizeMyanmarDriverLicenseRequest) {
                    body = recognizeMyanmarDriverLicenseRequest.body
                } else {
                    body = recognizeMyanmarDriverLicenseRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别缅文身份证中的文字信息，并返回识别的结构化结果。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeMyanmarIdcard(recognizeMyanmarIdcardRequest?: RecognizeMyanmarIdcardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/myanmar-id-card",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeMyanmarIdcardRequest !== null && recognizeMyanmarIdcardRequest !== undefined) {
                if (recognizeMyanmarIdcardRequest instanceof RecognizeMyanmarIdcardRequest) {
                    body = recognizeMyanmarIdcardRequest.body
                } else {
                    body = recognizeMyanmarIdcardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别用户上传的护照首页图片中的文字信息，并返回识别的结构化结果。当前版本支持中国护照的全字段识别。外国护照支持护照下方两行国际标准化的机读码识别，并可从中提取6-7个关键字段信息。
         * 
         * 说明：
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizePassport(recognizePassportRequest?: RecognizePassportRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/passport",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizePassportRequest !== null && recognizePassportRequest !== undefined) {
                if (recognizePassportRequest instanceof RecognizePassportRequest) {
                    body = recognizePassportRequest.body
                } else {
                    body = recognizePassportRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别核酸检测记录中的文字信息，并将识别的结构化结果返回给用户。PCR，全称Polymerase chain reaction,即聚合酶链式反应.PCR-test也为大众所认知为新型冠状病毒核酸检测测试。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizePcrTestRecord(recognizePcrTestRecordRequest?: RecognizePcrTestRecordRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/pcr-test-record",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizePcrTestRecordRequest !== null && recognizePcrTestRecordRequest !== undefined) {
                if (recognizePcrTestRecordRequest instanceof RecognizePcrTestRecordRequest) {
                    body = recognizePcrTestRecordRequest.body
                } else {
                    body = recognizePcrTestRecordRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别道路运输从业资格证上的关键文字信息，并返回识别的结构化结果。
         * 
         * 说明：
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeQualificationCertificate(recognizeQualificationCertificateRequest?: RecognizeQualificationCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/transportation-qualification-certificate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeQualificationCertificateRequest !== null && recognizeQualificationCertificateRequest !== undefined) {
                if (recognizeQualificationCertificateRequest instanceof RecognizeQualificationCertificateRequest) {
                    body = recognizeQualificationCertificateRequest.body
                } else {
                    body = recognizeQualificationCertificateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别定额发票中的文字信息，并返回识别的结构化结果。
         * 
         * 说明： 
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeQuotaInvoice(recognizeQuotaInvoiceRequest?: RecognizeQuotaInvoiceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/quota-invoice",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeQuotaInvoiceRequest !== null && recognizeQuotaInvoiceRequest !== undefined) {
                if (recognizeQuotaInvoiceRequest instanceof RecognizeQuotaInvoiceRequest) {
                    body = recognizeQuotaInvoiceRequest.body
                } else {
                    body = recognizeQuotaInvoiceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别出租车发票中的文字信息，并返回识别的结构化结果。
         * 
         * 说明：
         * 
         * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeTaxiInvoice(recognizeTaxiInvoiceRequest?: RecognizeTaxiInvoiceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/taxi-invoice",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeTaxiInvoiceRequest !== null && recognizeTaxiInvoiceRequest !== undefined) {
                if (recognizeTaxiInvoiceRequest instanceof RecognizeTaxiInvoiceRequest) {
                    body = recognizeTaxiInvoiceRequest.body
                } else {
                    body = recognizeTaxiInvoiceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别泰国身份证中的文字信息，并返回识别的结构化结果。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeThailandIdcard(recognizeThailandIdcardRequest?: RecognizeThailandIdcardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/thailand-id-card",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeThailandIdcardRequest !== null && recognizeThailandIdcardRequest !== undefined) {
                if (recognizeThailandIdcardRequest instanceof RecognizeThailandIdcardRequest) {
                    body = recognizeThailandIdcardRequest.body
                } else {
                    body = recognizeThailandIdcardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别泰国车牌图片中的车牌信息，并返回识别的结构化结果。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeThailandLicensePlate(recognizeThailandLicensePlateRequest?: RecognizeThailandLicensePlateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/thailand-license-plate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeThailandLicensePlateRequest !== null && recognizeThailandLicensePlateRequest !== undefined) {
                if (recognizeThailandLicensePlateRequest instanceof RecognizeThailandLicensePlateRequest) {
                    body = recognizeThailandLicensePlateRequest.body
                } else {
                    body = recognizeThailandLicensePlateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别车辆通行费发票中的文字信息，并返回识别的结构化结果。
         * 
         * 说明：
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeTollInvoice(recognizeTollInvoiceRequest?: RecognizeTollInvoiceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/toll-invoice",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeTollInvoiceRequest !== null && recognizeTollInvoiceRequest !== undefined) {
                if (recognizeTollInvoiceRequest instanceof RecognizeTollInvoiceRequest) {
                    body = recognizeTollInvoiceRequest.body
                } else {
                    body = recognizeTollInvoiceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别火车票中的文字信息，并返回识别的结构化结果。
         * 
         * 说明：
         * 
         * 如果图片中包含多张卡证票据，请调用[智能分类识别](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;OCR&amp;api&#x3D;AutoClassification)服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeTrainTicket(recognizeTrainTicketRequest?: RecognizeTrainTicketRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/train-ticket",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeTrainTicketRequest !== null && recognizeTrainTicketRequest !== undefined) {
                if (recognizeTrainTicketRequest instanceof RecognizeTrainTicketRequest) {
                    body = recognizeTrainTicketRequest.body
                } else {
                    body = recognizeTrainTicketRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别道路运输证首页中的文字信息，并返回识别的结构化结果。
         * 
         * 说明： 如果图片中包含多张卡证票据，请调用智能分类识别服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeTransportationLicense(recognizeTransportationLicenseRequest?: RecognizeTransportationLicenseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/transportation-license",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeTransportationLicenseRequest !== null && recognizeTransportationLicenseRequest !== undefined) {
                if (recognizeTransportationLicenseRequest instanceof RecognizeTransportationLicenseRequest) {
                    body = recognizeTransportationLicenseRequest.body
                } else {
                    body = recognizeTransportationLicenseRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别增值税发票的类别，以及图片中的文字内容，并以json格式返回识别的结构化结果，不支持真伪验证。该接口的使用限制请参见[约束与限制](https://support.huaweicloud.com/productdesc-ocr/ocr_01_0006.html#section15)，详细使用指导请参见[OCR服务使用简介](https://support.huaweicloud.com/qs-ocr/ocr_05_0001.html)章节。
         * 
         * 说明：
         * 
         * 该增值税发票仅限于中华人民共和国境内使用的增值税发票。
         * 
         * 支持的增值税发票包括：增值税专用发票、增值税普通发票、增值税电子普通发票、增值税电子专用发票、增值税电子普通发票（通行费）、增值税普通发票（卷票）。
         * 
         * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeVatInvoice(recognizeVatInvoiceRequest?: RecognizeVatInvoiceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/vat-invoice",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeVatInvoiceRequest !== null && recognizeVatInvoiceRequest !== undefined) {
                if (recognizeVatInvoiceRequest instanceof RecognizeVatInvoiceRequest) {
                    body = recognizeVatInvoiceRequest.body
                } else {
                    body = recognizeVatInvoiceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别用户上传的行驶证图片（或者用户提供的华为云上OBS的行驶证图片文件的URL）中主页和副页的文字内容，并将识别的结果返回给用户。
         * 
         * 说明：
         * 
         * 如果图片中包含多张卡证票据，请调用智能分类识别服务。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeVehicleLicense(recognizeVehicleLicenseRequest?: RecognizeVehicleLicenseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/vehicle-license",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeVehicleLicenseRequest !== null && recognizeVehicleLicenseRequest !== undefined) {
                if (recognizeVehicleLicenseRequest instanceof RecognizeVehicleLicenseRequest) {
                    body = recognizeVehicleLicenseRequest.body
                } else {
                    body = recognizeVehicleLicenseRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别用户上传的韵达电子面单图片中的文字内容，并将识别的结果以json格式返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeWaybillElectronic(recognizeWaybillElectronicRequest?: RecognizeWaybillElectronicRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/waybill-electronic",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeWaybillElectronicRequest !== null && recognizeWaybillElectronicRequest !== undefined) {
                if (recognizeWaybillElectronicRequest instanceof RecognizeWaybillElectronicRequest) {
                    body = recognizeWaybillElectronicRequest.body
                } else {
                    body = recognizeWaybillElectronicRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别网络图片中的文字内容，并返回识别的结构化结果。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeWebImage(recognizeWebImageRequest?: RecognizeWebImageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/web-image",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeWebImageRequest !== null && recognizeWebImageRequest !== undefined) {
                if (recognizeWebImageRequest instanceof RecognizeWebImageRequest) {
                    body = recognizeWebImageRequest.body
                } else {
                    body = recognizeWebImageRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 识别图片中的车架号信息，并将识别结果返回给用户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        recognizeVin(recognizeVinRequest?: RecognizeVinRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ocr/vin",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (recognizeVinRequest !== null && recognizeVinRequest !== undefined) {
                if (recognizeVinRequest instanceof RecognizeVinRequest) {
                    body = recognizeVinRequest.body
                } else {
                    body = recognizeVinRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): OcrClient {
    return new OcrClient(client);
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