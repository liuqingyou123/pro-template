import React, { ReactNode } from 'react';

import {
    AccountBookFilled,
    AccountBookOutlined,
    AccountBookTwoTone,
    AimOutlined,
    AlertFilled,
    AlertOutlined,
    AlertTwoTone,
    AlibabaOutlined,
    AlignCenterOutlined,
    AlignLeftOutlined,
    AlignRightOutlined,
    AlipayCircleFilled,
    AlipayCircleOutlined,
    AlipayOutlined,
    AlipaySquareFilled,
    AliwangwangFilled,
    AliwangwangOutlined,
    AliyunOutlined,
    AmazonCircleFilled,
    AmazonOutlined,
    AmazonSquareFilled,
    AndroidFilled,
    AndroidOutlined,
    AntCloudOutlined,
    AntDesignOutlined,
    ApartmentOutlined,
    ApiFilled,
    ApiOutlined,
    ApiTwoTone,
    AppleFilled,
    AppleOutlined,
    AppstoreAddOutlined,
    AppstoreFilled,
    AppstoreOutlined,
    AppstoreTwoTone,
    AreaChartOutlined,
    ArrowDownOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ArrowUpOutlined,
    ArrowsAltOutlined,
    AudioFilled,
    AudioMutedOutlined,
    AudioOutlined,
    AudioTwoTone,
    AuditOutlined,
    BackwardFilled,
    BackwardOutlined,
    BankFilled,
    BankOutlined,
    BankTwoTone,
    BarChartOutlined,
    BarcodeOutlined,
    BarsOutlined,
    BehanceCircleFilled,
    BehanceOutlined,
    BehanceSquareFilled,
    BehanceSquareOutlined,
    BellFilled,
    BellOutlined,
    BellTwoTone,
    BgColorsOutlined,
    BlockOutlined,
    BoldOutlined,
    BookFilled,
    BookOutlined,
    BookTwoTone,
    BorderBottomOutlined,
    BorderHorizontalOutlined,
    BorderInnerOutlined,
    BorderLeftOutlined,
    BorderOuterOutlined,
    BorderOutlined,
    BorderRightOutlined,
    BorderTopOutlined,
    BorderVerticleOutlined,
    BorderlessTableOutlined,
    BoxPlotFilled,
    BoxPlotOutlined,
    BoxPlotTwoTone,
    BranchesOutlined,
    BugFilled,
    BugOutlined,
    BugTwoTone,
    BuildFilled,
    BuildOutlined,
    BuildTwoTone,
    BulbFilled,
    BulbOutlined,
    BulbTwoTone,
    CalculatorFilled,
    CalculatorOutlined,
    CalculatorTwoTone,
    CalendarFilled,
    CalendarOutlined,
    CalendarTwoTone,
    CameraFilled,
    CameraOutlined,
    CameraTwoTone,
    CarFilled,
    CarOutlined,
    CarTwoTone,
    CaretDownFilled,
    CaretDownOutlined,
    CaretLeftFilled,
    CaretLeftOutlined,
    CaretRightFilled,
    CaretRightOutlined,
    CaretUpFilled,
    CaretUpOutlined,
    CarryOutFilled,
    CarryOutOutlined,
    CarryOutTwoTone,
    CheckCircleFilled,
    CheckCircleOutlined,
    CheckCircleTwoTone,
    CheckOutlined,
    CheckSquareFilled,
    CheckSquareOutlined,
    CheckSquareTwoTone,
    ChromeFilled,
    ChromeOutlined,
    CiCircleFilled,
    CiCircleOutlined,
    CiCircleTwoTone,
    CiOutlined,
    CiTwoTone,
    ClearOutlined,
    ClockCircleFilled,
    ClockCircleOutlined,
    ClockCircleTwoTone,
    CloseCircleFilled,
    CloseCircleOutlined,
    CloseCircleTwoTone,
    CloseOutlined,
    CloseSquareFilled,
    CloseSquareOutlined,
    CloseSquareTwoTone,
    CloudDownloadOutlined,
    CloudFilled,
    CloudOutlined,
    CloudServerOutlined,
    CloudSyncOutlined,
    CloudTwoTone,
    CloudUploadOutlined,
    ClusterOutlined,
    CodeFilled,
    CodeOutlined,
    CodeSandboxCircleFilled,
    CodeSandboxOutlined,
    CodeSandboxSquareFilled,
    CodeTwoTone,
    CodepenCircleFilled,
    CodepenCircleOutlined,
    CodepenOutlined,
    CodepenSquareFilled,
    CoffeeOutlined,
    ColumnHeightOutlined,
    ColumnWidthOutlined,
    CommentOutlined,
    CompassFilled,
    CompassOutlined,
    CompassTwoTone,
    CompressOutlined,
    ConsoleSqlOutlined,
    ContactsFilled,
    ContactsOutlined,
    ContactsTwoTone,
    ContainerFilled,
    ContainerOutlined,
    ContainerTwoTone,
    ControlFilled,
    ControlOutlined,
    ControlTwoTone,
    CopyFilled,
    CopyOutlined,
    CopyTwoTone,
    CopyrightCircleFilled,
    CopyrightCircleOutlined,
    CopyrightCircleTwoTone,
    CopyrightOutlined,
    CopyrightTwoTone,
    CreditCardFilled,
    CreditCardOutlined,
    CreditCardTwoTone,
    CrownFilled,
    CrownOutlined,
    CrownTwoTone,
    CustomerServiceFilled,
    CustomerServiceOutlined,
    CustomerServiceTwoTone,
    DashOutlined,
    DashboardFilled,
    DashboardOutlined,
    DashboardTwoTone,
    DatabaseFilled,
    DatabaseOutlined,
    DatabaseTwoTone,
    DeleteColumnOutlined,
    DeleteFilled,
    DeleteOutlined,
    DeleteRowOutlined,
    DeleteTwoTone,
    DeliveredProcedureOutlined,
    DeploymentUnitOutlined,
    DesktopOutlined,
    DiffFilled,
    DiffOutlined,
    DiffTwoTone,
    DingdingOutlined,
    DingtalkCircleFilled,
    DingtalkOutlined,
    DingtalkSquareFilled,
    DisconnectOutlined,
    DislikeFilled,
    DislikeOutlined,
    DislikeTwoTone,
    DollarCircleFilled,
    DollarCircleOutlined,
    DollarCircleTwoTone,
    DollarOutlined,
    DollarTwoTone,
    DotChartOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined,
    DownCircleFilled,
    DownCircleOutlined,
    DownCircleTwoTone,
    DownOutlined,
    DownSquareFilled,
    DownSquareOutlined,
    DownSquareTwoTone,
    DownloadOutlined,
    DragOutlined,
    DribbbleCircleFilled,
    DribbbleOutlined,
    DribbbleSquareFilled,
    DribbbleSquareOutlined,
    DropboxCircleFilled,
    DropboxOutlined,
    DropboxSquareFilled,
    EditFilled,
    EditOutlined,
    EditTwoTone,
    EllipsisOutlined,
    EnterOutlined,
    EnvironmentFilled,
    EnvironmentOutlined,
    EnvironmentTwoTone,
    EuroCircleFilled,
    EuroCircleOutlined,
    EuroCircleTwoTone,
    EuroOutlined,
    EuroTwoTone,
    ExceptionOutlined,
    ExclamationCircleFilled,
    ExclamationCircleOutlined,
    ExclamationCircleTwoTone,
    ExclamationOutlined,
    ExpandAltOutlined,
    ExpandOutlined,
    ExperimentFilled,
    ExperimentOutlined,
    ExperimentTwoTone,
    ExportOutlined,
    EyeFilled,
    EyeInvisibleFilled,
    EyeInvisibleOutlined,
    EyeInvisibleTwoTone,
    EyeOutlined,
    EyeTwoTone,
    FacebookFilled,
    FacebookOutlined,
    FallOutlined,
    FastBackwardFilled,
    FastBackwardOutlined,
    FastForwardFilled,
    FastForwardOutlined,
    FieldBinaryOutlined,
    FieldNumberOutlined,
    FieldStringOutlined,
    FieldTimeOutlined,
    FileAddFilled,
    FileAddOutlined,
    FileAddTwoTone,
    FileDoneOutlined,
    FileExcelFilled,
    FileExcelOutlined,
    FileExcelTwoTone,
    FileExclamationFilled,
    FileExclamationOutlined,
    FileExclamationTwoTone,
    FileFilled,
    FileGifOutlined,
    FileImageFilled,
    FileImageOutlined,
    FileImageTwoTone,
    FileJpgOutlined,
    FileMarkdownFilled,
    FileMarkdownOutlined,
    FileMarkdownTwoTone,
    FileOutlined,
    FilePdfFilled,
    FilePdfOutlined,
    FilePdfTwoTone,
    FilePptFilled,
    FilePptOutlined,
    FilePptTwoTone,
    FileProtectOutlined,
    FileSearchOutlined,
    FileSyncOutlined,
    FileTextFilled,
    FileTextOutlined,
    FileTextTwoTone,
    FileTwoTone,
    FileUnknownFilled,
    FileUnknownOutlined,
    FileUnknownTwoTone,
    FileWordFilled,
    FileWordOutlined,
    FileWordTwoTone,
    FileZipFilled,
    FileZipOutlined,
    FileZipTwoTone,
    FilterFilled,
    FilterOutlined,
    FilterTwoTone,
    FireFilled,
    FireOutlined,
    FireTwoTone,
    FlagFilled,
    FlagOutlined,
    FlagTwoTone,
    FolderAddFilled,
    FolderAddOutlined,
    FolderAddTwoTone,
    FolderFilled,
    FolderOpenFilled,
    FolderOpenOutlined,
    FolderOpenTwoTone,
    FolderOutlined,
    FolderTwoTone,
    FolderViewOutlined,
    FontColorsOutlined,
    FontSizeOutlined,
    ForkOutlined,
    FormOutlined,
    FormatPainterFilled,
    FormatPainterOutlined,
    ForwardFilled,
    ForwardOutlined,
    FrownFilled,
    FrownOutlined,
    FrownTwoTone,
    FullscreenExitOutlined,
    FullscreenOutlined,
    FunctionOutlined,
    FundFilled,
    FundOutlined,
    FundProjectionScreenOutlined,
    FundTwoTone,
    FundViewOutlined,
    FunnelPlotFilled,
    FunnelPlotOutlined,
    FunnelPlotTwoTone,
    GatewayOutlined,
    GifOutlined,
    GiftFilled,
    GiftOutlined,
    GiftTwoTone,
    GithubFilled,
    GithubOutlined,
    GitlabFilled,
    GitlabOutlined,
    GlobalOutlined,
    GoldFilled,
    GoldOutlined,
    GoldTwoTone,
    GoldenFilled,
    GoogleCircleFilled,
    GoogleOutlined,
    GooglePlusCircleFilled,
    GooglePlusOutlined,
    GooglePlusSquareFilled,
    GoogleSquareFilled,
    GroupOutlined,
    HddFilled,
    HddOutlined,
    HddTwoTone,
    HeartFilled,
    HeartOutlined,
    HeartTwoTone,
    HeatMapOutlined,
    HighlightFilled,
    HighlightOutlined,
    HighlightTwoTone,
    HistoryOutlined,
    HomeFilled,
    HomeOutlined,
    HomeTwoTone,
    HourglassFilled,
    HourglassOutlined,
    HourglassTwoTone,
    Html5Filled,
    Html5Outlined,
    Html5TwoTone,
    IdcardFilled,
    IdcardOutlined,
    IdcardTwoTone,
    IeCircleFilled,
    IeOutlined,
    IeSquareFilled,
    ImportOutlined,
    InboxOutlined,
    InfoCircleFilled,
    InfoCircleOutlined,
    InfoCircleTwoTone,
    InfoOutlined,
    InsertRowAboveOutlined,
    InsertRowBelowOutlined,
    InsertRowLeftOutlined,
    InsertRowRightOutlined,
    InstagramFilled,
    InstagramOutlined,
    InsuranceFilled,
    InsuranceOutlined,
    InsuranceTwoTone,
    InteractionFilled,
    InteractionOutlined,
    InteractionTwoTone,
    IssuesCloseOutlined,
    ItalicOutlined,
    KeyOutlined,
    LaptopOutlined,
    LayoutFilled,
    LayoutOutlined,
    LayoutTwoTone,
    LeftCircleFilled,
    LeftCircleOutlined,
    LeftCircleTwoTone,
    LeftOutlined,
    LeftSquareFilled,
    LeftSquareOutlined,
    LeftSquareTwoTone,
    LikeFilled,
    LikeOutlined,
    LikeTwoTone,
    LineChartOutlined,
    LineHeightOutlined,
    LineOutlined,
    LinkOutlined,
    LinkedinFilled,
    LinkedinOutlined,
    Loading3QuartersOutlined,
    LoadingOutlined,
    LockFilled,
    LockOutlined,
    LockTwoTone,
    LoginOutlined,
    LogoutOutlined,
    MacCommandFilled,
    MacCommandOutlined,
    MailFilled,
    MailOutlined,
    MailTwoTone,
    ManOutlined,
    MedicineBoxFilled,
    MedicineBoxOutlined,
    MedicineBoxTwoTone,
    MediumCircleFilled,
    MediumOutlined,
    MediumSquareFilled,
    MediumWorkmarkOutlined,
    MehFilled,
    MehOutlined,
    MehTwoTone,
    MenuFoldOutlined,
    MenuOutlined,
    MenuUnfoldOutlined,
    MergeCellsOutlined,
    MessageFilled,
    MessageOutlined,
    MessageTwoTone,
    MinusCircleFilled,
    MinusCircleOutlined,
    MinusCircleTwoTone,
    MinusOutlined,
    MinusSquareFilled,
    MinusSquareOutlined,
    MinusSquareTwoTone,
    MobileFilled,
    MobileOutlined,
    MobileTwoTone,
    MoneyCollectFilled,
    MoneyCollectOutlined,
    MoneyCollectTwoTone,
    MonitorOutlined,
    MoreOutlined,
    NodeCollapseOutlined,
    NodeExpandOutlined,
    NodeIndexOutlined,
    NotificationFilled,
    NotificationOutlined,
    NotificationTwoTone,
    NumberOutlined,
    OneToOneOutlined,
    OrderedListOutlined,
    PaperClipOutlined,
    PartitionOutlined,
    PauseCircleFilled,
    PauseCircleOutlined,
    PauseCircleTwoTone,
    PauseOutlined,
    PayCircleFilled,
    PayCircleOutlined,
    PercentageOutlined,
    PhoneFilled,
    PhoneOutlined,
    PhoneTwoTone,
    PicCenterOutlined,
    PicLeftOutlined,
    PicRightOutlined,
    PictureFilled,
    PictureOutlined,
    PictureTwoTone,
    PieChartFilled,
    PieChartOutlined,
    PieChartTwoTone,
    PlayCircleFilled,
    PlayCircleOutlined,
    PlayCircleTwoTone,
    PlaySquareFilled,
    PlaySquareOutlined,
    PlaySquareTwoTone,
    PlusCircleFilled,
    PlusCircleOutlined,
    PlusCircleTwoTone,
    PlusOutlined,
    PlusSquareFilled,
    PlusSquareOutlined,
    PlusSquareTwoTone,
    PoundCircleFilled,
    PoundCircleOutlined,
    PoundCircleTwoTone,
    PoundOutlined,
    PoweroffOutlined,
    PrinterFilled,
    PrinterOutlined,
    PrinterTwoTone,
    ProfileFilled,
    ProfileOutlined,
    ProfileTwoTone,
    ProjectFilled,
    ProjectOutlined,
    ProjectTwoTone,
    PropertySafetyFilled,
    PropertySafetyOutlined,
    PropertySafetyTwoTone,
    PullRequestOutlined,
    PushpinFilled,
    PushpinOutlined,
    PushpinTwoTone,
    QqCircleFilled,
    QqOutlined,
    QqSquareFilled,
    QrcodeOutlined,
    QuestionCircleFilled,
    QuestionCircleOutlined,
    QuestionCircleTwoTone,
    QuestionOutlined,
    RadarChartOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusSettingOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    ReadFilled,
    ReadOutlined,
    ReconciliationFilled,
    ReconciliationOutlined,
    ReconciliationTwoTone,
    RedEnvelopeFilled,
    RedEnvelopeOutlined,
    RedEnvelopeTwoTone,
    RedditCircleFilled,
    RedditOutlined,
    RedditSquareFilled,
    RedoOutlined,
    ReloadOutlined,
    RestFilled,
    RestOutlined,
    RestTwoTone,
    RetweetOutlined,
    RightCircleFilled,
    RightCircleOutlined,
    RightCircleTwoTone,
    RightOutlined,
    RightSquareFilled,
    RightSquareOutlined,
    RightSquareTwoTone,
    RiseOutlined,
    RobotFilled,
    RobotOutlined,
    RocketFilled,
    RocketOutlined,
    RocketTwoTone,
    RollbackOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    SafetyCertificateFilled,
    SafetyCertificateOutlined,
    SafetyCertificateTwoTone,
    SafetyOutlined,
    SaveFilled,
    SaveOutlined,
    SaveTwoTone,
    ScanOutlined,
    ScheduleFilled,
    ScheduleOutlined,
    ScheduleTwoTone,
    ScissorOutlined,
    SearchOutlined,
    SecurityScanFilled,
    SecurityScanOutlined,
    SecurityScanTwoTone,
    SelectOutlined,
    SendOutlined,
    SettingFilled,
    SettingOutlined,
    SettingTwoTone,
    ShakeOutlined,
    ShareAltOutlined,
    ShopFilled,
    ShopOutlined,
    ShopTwoTone,
    ShoppingCartOutlined,
    ShoppingFilled,
    ShoppingOutlined,
    ShoppingTwoTone,
    ShrinkOutlined,
    SignalFilled,
    SisternodeOutlined,
    SketchCircleFilled,
    SketchOutlined,
    SketchSquareFilled,
    SkinFilled,
    SkinOutlined,
    SkinTwoTone,
    SkypeFilled,
    SkypeOutlined,
    SlackCircleFilled,
    SlackOutlined,
    SlackSquareFilled,
    SlackSquareOutlined,
    SlidersFilled,
    SlidersOutlined,
    SlidersTwoTone,
    SmallDashOutlined,
    SmileFilled,
    SmileOutlined,
    SmileTwoTone,
    SnippetsFilled,
    SnippetsOutlined,
    SnippetsTwoTone,
    SolutionOutlined,
    SortAscendingOutlined,
    SortDescendingOutlined,
    SoundFilled,
    SoundOutlined,
    SoundTwoTone,
    SplitCellsOutlined,
    StarFilled,
    StarOutlined,
    StarTwoTone,
    StepBackwardFilled,
    StepBackwardOutlined,
    StepForwardFilled,
    StepForwardOutlined,
    StockOutlined,
    StopFilled,
    StopOutlined,
    StopTwoTone,
    StrikethroughOutlined,
    SubnodeOutlined,
    SwapLeftOutlined,
    SwapOutlined,
    SwapRightOutlined,
    SwitcherFilled,
    SwitcherOutlined,
    SwitcherTwoTone,
    SyncOutlined,
    TableOutlined,
    TabletFilled,
    TabletOutlined,
    TabletTwoTone,
    TagFilled,
    TagOutlined,
    TagTwoTone,
    TagsFilled,
    TagsOutlined,
    TagsTwoTone,
    TaobaoCircleFilled,
    TaobaoCircleOutlined,
    TaobaoOutlined,
    TaobaoSquareFilled,
    TeamOutlined,
    ThunderboltFilled,
    ThunderboltOutlined,
    ThunderboltTwoTone,
    ToTopOutlined,
    ToolFilled,
    ToolOutlined,
    ToolTwoTone,
    TrademarkCircleFilled,
    TrademarkCircleOutlined,
    TrademarkCircleTwoTone,
    TrademarkOutlined,
    TransactionOutlined,
    TranslationOutlined,
    TrophyFilled,
    TrophyOutlined,
    TrophyTwoTone,
    TwitterCircleFilled,
    TwitterOutlined,
    TwitterSquareFilled,
    UnderlineOutlined,
    UndoOutlined,
    UngroupOutlined,
    UnlockFilled,
    UnlockOutlined,
    UnlockTwoTone,
    UnorderedListOutlined,
    UpCircleFilled,
    UpCircleOutlined,
    UpCircleTwoTone,
    UpOutlined,
    UpSquareFilled,
    UpSquareOutlined,
    UpSquareTwoTone,
    UploadOutlined,
    UsbFilled,
    UsbOutlined,
    UsbTwoTone,
    UserAddOutlined,
    UserDeleteOutlined,
    UserOutlined,
    UserSwitchOutlined,
    UsergroupAddOutlined,
    UsergroupDeleteOutlined,
    VerifiedOutlined,
    VerticalAlignBottomOutlined,
    VerticalAlignMiddleOutlined,
    VerticalAlignTopOutlined,
    VerticalLeftOutlined,
    VerticalRightOutlined,
    VideoCameraAddOutlined,
    VideoCameraFilled,
    VideoCameraOutlined,
    VideoCameraTwoTone,
    WalletFilled,
    WalletOutlined,
    WalletTwoTone,
    WarningFilled,
    WarningOutlined,
    WarningTwoTone,
    WechatFilled,
    WechatOutlined,
    WeiboCircleFilled,
    WeiboCircleOutlined,
    WeiboOutlined,
    WeiboSquareFilled,
    WeiboSquareOutlined,
    WhatsAppOutlined,
    WifiOutlined,
    WindowsFilled,
    WindowsOutlined,
    WomanOutlined,
    YahooFilled,
    YahooOutlined,
    YoutubeFilled,
    YoutubeOutlined,
    YuqueFilled,
    YuqueOutlined,
    ZhihuCircleFilled,
    ZhihuOutlined,
    ZhihuSquareFilled,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';

const IconMap: Map<String, ReactNode> = new Map<String, ReactNode>();
IconMap.set('HeartOutlined', <HeartOutlined />);
IconMap.set('SmileOutlined', <SmileOutlined />);

IconMap.set('AccountBookFilled', <AccountBookFilled />);
IconMap.set('AccountBookOutlined', <AccountBookOutlined />);
IconMap.set('AccountBookTwoTone', <AccountBookTwoTone />);
IconMap.set('AimOutlined', <AimOutlined />);
IconMap.set('AlertFilled', <AlertFilled />);
IconMap.set('AlertOutlined', <AlertOutlined />);
IconMap.set('AlertTwoTone', <AlertTwoTone />);
IconMap.set('AlibabaOutlined', <AlibabaOutlined />);
IconMap.set('AlignCenterOutlined', <AlignCenterOutlined />);
IconMap.set('AlignLeftOutlined', <AlignLeftOutlined />);
IconMap.set('AlignRightOutlined', <AlignRightOutlined />);
IconMap.set('AlipayCircleFilled', <AlipayCircleFilled />);
IconMap.set('AlipayCircleOutlined', <AlipayCircleOutlined />);
IconMap.set('AlipayOutlined', <AlipayOutlined />);
IconMap.set('AlipaySquareFilled', <AlipaySquareFilled />);
IconMap.set('AliwangwangFilled', <AliwangwangFilled />);
IconMap.set('AliwangwangOutlined', <AliwangwangOutlined />);
IconMap.set('AliyunOutlined', <AliyunOutlined />);
IconMap.set('AmazonCircleFilled', <AmazonCircleFilled />);
IconMap.set('AmazonOutlined', <AmazonOutlined />);
IconMap.set('AmazonSquareFilled', <AmazonSquareFilled />);
IconMap.set('AndroidFilled', <AndroidFilled />);
IconMap.set('AndroidOutlined', <AndroidOutlined />);
IconMap.set('AntCloudOutlined', <AntCloudOutlined />);
IconMap.set('AntDesignOutlined', <AntDesignOutlined />);
IconMap.set('ApartmentOutlined', <ApartmentOutlined />);
IconMap.set('ApiFilled', <ApiFilled />);
IconMap.set('ApiOutlined', <ApiOutlined />);
IconMap.set('ApiTwoTone', <ApiTwoTone />);
IconMap.set('AppleFilled', <AppleFilled />);
IconMap.set('AppleOutlined', <AppleOutlined />);
IconMap.set('AppstoreAddOutlined', <AppstoreAddOutlined />);
IconMap.set('AppstoreFilled', <AppstoreFilled />);
IconMap.set('AppstoreOutlined', <AppstoreOutlined />);
IconMap.set('AppstoreTwoTone', <AppstoreTwoTone />);
IconMap.set('AreaChartOutlined', <AreaChartOutlined />);
IconMap.set('ArrowDownOutlined', <ArrowDownOutlined />);
IconMap.set('ArrowLeftOutlined', <ArrowLeftOutlined />);
IconMap.set('ArrowRightOutlined', <ArrowRightOutlined />);
IconMap.set('ArrowUpOutlined', <ArrowUpOutlined />);
IconMap.set('ArrowsAltOutlined', <ArrowsAltOutlined />);
IconMap.set('AudioFilled', <AudioFilled />);
IconMap.set('AudioMutedOutlined', <AudioMutedOutlined />);
IconMap.set('AudioOutlined', <AudioOutlined />);
IconMap.set('AudioTwoTone', <AudioTwoTone />);
IconMap.set('AuditOutlined', <AuditOutlined />);
IconMap.set('BackwardFilled', <BackwardFilled />);
IconMap.set('BackwardOutlined', <BackwardOutlined />);
IconMap.set('BankFilled', <BankFilled />);
IconMap.set('BankOutlined', <BankOutlined />);
IconMap.set('BankTwoTone', <BankTwoTone />);
IconMap.set('BarChartOutlined', <BarChartOutlined />);
IconMap.set('BarcodeOutlined', <BarcodeOutlined />);
IconMap.set('BarsOutlined', <BarsOutlined />);
IconMap.set('BehanceCircleFilled', <BehanceCircleFilled />);
IconMap.set('BehanceOutlined', <BehanceOutlined />);
IconMap.set('BehanceSquareFilled', <BehanceSquareFilled />);
IconMap.set('BehanceSquareOutlined', <BehanceSquareOutlined />);
IconMap.set('BellFilled', <BellFilled />);
IconMap.set('BellOutlined', <BellOutlined />);
IconMap.set('BellTwoTone', <BellTwoTone />);
IconMap.set('BgColorsOutlined', <BgColorsOutlined />);
IconMap.set('BlockOutlined', <BlockOutlined />);
IconMap.set('BoldOutlined', <BoldOutlined />);
IconMap.set('BookFilled', <BookFilled />);
IconMap.set('BookOutlined', <BookOutlined />);
IconMap.set('BookTwoTone', <BookTwoTone />);
IconMap.set('BorderBottomOutlined', <BorderBottomOutlined />);
IconMap.set('BorderHorizontalOutlined', <BorderHorizontalOutlined />);
IconMap.set('BorderInnerOutlined', <BorderInnerOutlined />);
IconMap.set('BorderLeftOutlined', <BorderLeftOutlined />);
IconMap.set('BorderOuterOutlined', <BorderOuterOutlined />);
IconMap.set('BorderOutlined', <BorderOutlined />);
IconMap.set('BorderRightOutlined', <BorderRightOutlined />);
IconMap.set('BorderTopOutlined', <BorderTopOutlined />);
IconMap.set('BorderVerticleOutlined', <BorderVerticleOutlined />);
IconMap.set('BorderlessTableOutlined', <BorderlessTableOutlined />);
IconMap.set('BoxPlotFilled', <BoxPlotFilled />);
IconMap.set('BoxPlotOutlined', <BoxPlotOutlined />);
IconMap.set('BoxPlotTwoTone', <BoxPlotTwoTone />);
IconMap.set('BranchesOutlined', <BranchesOutlined />);
IconMap.set('BugFilled', <BugFilled />);
IconMap.set('BugOutlined', <BugOutlined />);
IconMap.set('BugTwoTone', <BugTwoTone />);
IconMap.set('BuildFilled', <BuildFilled />);
IconMap.set('BuildOutlined', <BuildOutlined />);
IconMap.set('BuildTwoTone', <BuildTwoTone />);
IconMap.set('BulbFilled', <BulbFilled />);
IconMap.set('BulbOutlined', <BulbOutlined />);
IconMap.set('BulbTwoTone', <BulbTwoTone />);
IconMap.set('CalculatorFilled', <CalculatorFilled />);
IconMap.set('CalculatorOutlined', <CalculatorOutlined />);
IconMap.set('CalculatorTwoTone', <CalculatorTwoTone />);
IconMap.set('CalendarFilled', <CalendarFilled />);
IconMap.set('CalendarOutlined', <CalendarOutlined />);
IconMap.set('CalendarTwoTone', <CalendarTwoTone />);
IconMap.set('CameraFilled', <CameraFilled />);
IconMap.set('CameraOutlined', <CameraOutlined />);
IconMap.set('CameraTwoTone', <CameraTwoTone />);
IconMap.set('CarFilled', <CarFilled />);
IconMap.set('CarOutlined', <CarOutlined />);
IconMap.set('CarTwoTone', <CarTwoTone />);
IconMap.set('CaretDownFilled', <CaretDownFilled />);
IconMap.set('CaretDownOutlined', <CaretDownOutlined />);
IconMap.set('CaretLeftFilled', <CaretLeftFilled />);
IconMap.set('CaretLeftOutlined', <CaretLeftOutlined />);
IconMap.set('CaretRightFilled', <CaretRightFilled />);
IconMap.set('CaretRightOutlined', <CaretRightOutlined />);
IconMap.set('CaretUpFilled', <CaretUpFilled />);
IconMap.set('CaretUpOutlined', <CaretUpOutlined />);
IconMap.set('CarryOutFilled', <CarryOutFilled />);
IconMap.set('CarryOutOutlined', <CarryOutOutlined />);
IconMap.set('CarryOutTwoTone', <CarryOutTwoTone />);
IconMap.set('CheckCircleFilled', <CheckCircleFilled />);
IconMap.set('CheckCircleOutlined', <CheckCircleOutlined />);
IconMap.set('CheckCircleTwoTone', <CheckCircleTwoTone />);
IconMap.set('CheckOutlined', <CheckOutlined />);
IconMap.set('CheckSquareFilled', <CheckSquareFilled />);
IconMap.set('CheckSquareOutlined', <CheckSquareOutlined />);
IconMap.set('CheckSquareTwoTone', <CheckSquareTwoTone />);
IconMap.set('ChromeFilled', <ChromeFilled />);
IconMap.set('ChromeOutlined', <ChromeOutlined />);
IconMap.set('CiCircleFilled', <CiCircleFilled />);
IconMap.set('CiCircleOutlined', <CiCircleOutlined />);
IconMap.set('CiCircleTwoTone', <CiCircleTwoTone />);
IconMap.set('CiOutlined', <CiOutlined />);
IconMap.set('CiTwoTone', <CiTwoTone />);
IconMap.set('ClearOutlined', <ClearOutlined />);
IconMap.set('ClockCircleFilled', <ClockCircleFilled />);
IconMap.set('ClockCircleOutlined', <ClockCircleOutlined />);
IconMap.set('ClockCircleTwoTone', <ClockCircleTwoTone />);
IconMap.set('CloseCircleFilled', <CloseCircleFilled />);
IconMap.set('CloseCircleOutlined', <CloseCircleOutlined />);
IconMap.set('CloseCircleTwoTone', <CloseCircleTwoTone />);
IconMap.set('CloseOutlined', <CloseOutlined />);
IconMap.set('CloseSquareFilled', <CloseSquareFilled />);
IconMap.set('CloseSquareOutlined', <CloseSquareOutlined />);
IconMap.set('CloseSquareTwoTone', <CloseSquareTwoTone />);
IconMap.set('CloudDownloadOutlined', <CloudDownloadOutlined />);
IconMap.set('CloudFilled', <CloudFilled />);
IconMap.set('CloudOutlined', <CloudOutlined />);
IconMap.set('CloudServerOutlined', <CloudServerOutlined />);
IconMap.set('CloudSyncOutlined', <CloudSyncOutlined />);
IconMap.set('CloudTwoTone', <CloudTwoTone />);
IconMap.set('CloudUploadOutlined', <CloudUploadOutlined />);
IconMap.set('ClusterOutlined', <ClusterOutlined />);
IconMap.set('CodeFilled', <CodeFilled />);
IconMap.set('CodeOutlined', <CodeOutlined />);
IconMap.set('CodeSandboxCircleFilled', <CodeSandboxCircleFilled />);
IconMap.set('CodeSandboxOutlined', <CodeSandboxOutlined />);
IconMap.set('CodeSandboxSquareFilled', <CodeSandboxSquareFilled />);
IconMap.set('CodeTwoTone', <CodeTwoTone />);
IconMap.set('CodepenCircleFilled', <CodepenCircleFilled />);
IconMap.set('CodepenCircleOutlined', <CodepenCircleOutlined />);
IconMap.set('CodepenOutlined', <CodepenOutlined />);
IconMap.set('CodepenSquareFilled', <CodepenSquareFilled />);
IconMap.set('CoffeeOutlined', <CoffeeOutlined />);
IconMap.set('ColumnHeightOutlined', <ColumnHeightOutlined />);
IconMap.set('ColumnWidthOutlined', <ColumnWidthOutlined />);
IconMap.set('CommentOutlined', <CommentOutlined />);
IconMap.set('CompassFilled', <CompassFilled />);
IconMap.set('CompassOutlined', <CompassOutlined />);
IconMap.set('CompassTwoTone', <CompassTwoTone />);
IconMap.set('CompressOutlined', <CompressOutlined />);
IconMap.set('ConsoleSqlOutlined', <ConsoleSqlOutlined />);
IconMap.set('ContactsFilled', <ContactsFilled />);
IconMap.set('ContactsOutlined', <ContactsOutlined />);
IconMap.set('ContactsTwoTone', <ContactsTwoTone />);
IconMap.set('ContainerFilled', <ContainerFilled />);
IconMap.set('ContainerOutlined', <ContainerOutlined />);
IconMap.set('ContainerTwoTone', <ContainerTwoTone />);
IconMap.set('ControlFilled', <ControlFilled />);
IconMap.set('ControlOutlined', <ControlOutlined />);
IconMap.set('ControlTwoTone', <ControlTwoTone />);
IconMap.set('CopyFilled', <CopyFilled />);
IconMap.set('CopyOutlined', <CopyOutlined />);
IconMap.set('CopyTwoTone', <CopyTwoTone />);
IconMap.set('CopyrightCircleFilled', <CopyrightCircleFilled />);
IconMap.set('CopyrightCircleOutlined', <CopyrightCircleOutlined />);
IconMap.set('CopyrightCircleTwoTone', <CopyrightCircleTwoTone />);
IconMap.set('CopyrightOutlined', <CopyrightOutlined />);
IconMap.set('CopyrightTwoTone', <CopyrightTwoTone />);
IconMap.set('CreditCardFilled', <CreditCardFilled />);
IconMap.set('CreditCardOutlined', <CreditCardOutlined />);
IconMap.set('CreditCardTwoTone', <CreditCardTwoTone />);
IconMap.set('CrownFilled', <CrownFilled />);
IconMap.set('CrownOutlined', <CrownOutlined />);
IconMap.set('CrownTwoTone', <CrownTwoTone />);
IconMap.set('CustomerServiceFilled', <CustomerServiceFilled />);
IconMap.set('CustomerServiceOutlined', <CustomerServiceOutlined />);
IconMap.set('CustomerServiceTwoTone', <CustomerServiceTwoTone />);
IconMap.set('DashOutlined', <DashOutlined />);
IconMap.set('DashboardFilled', <DashboardFilled />);
IconMap.set('DashboardOutlined', <DashboardOutlined />);
IconMap.set('DashboardTwoTone', <DashboardTwoTone />);
IconMap.set('DatabaseFilled', <DatabaseFilled />);
IconMap.set('DatabaseOutlined', <DatabaseOutlined />);
IconMap.set('DatabaseTwoTone', <DatabaseTwoTone />);
IconMap.set('DeleteColumnOutlined', <DeleteColumnOutlined />);
IconMap.set('DeleteFilled', <DeleteFilled />);
IconMap.set('DeleteOutlined', <DeleteOutlined />);
IconMap.set('DeleteRowOutlined', <DeleteRowOutlined />);
IconMap.set('DeleteTwoTone', <DeleteTwoTone />);
IconMap.set('DeliveredProcedureOutlined', <DeliveredProcedureOutlined />);
IconMap.set('DeploymentUnitOutlined', <DeploymentUnitOutlined />);
IconMap.set('DesktopOutlined', <DesktopOutlined />);
IconMap.set('DiffFilled', <DiffFilled />);
IconMap.set('DiffOutlined', <DiffOutlined />);
IconMap.set('DiffTwoTone', <DiffTwoTone />);
IconMap.set('DingdingOutlined', <DingdingOutlined />);
IconMap.set('DingtalkCircleFilled', <DingtalkCircleFilled />);
IconMap.set('DingtalkOutlined', <DingtalkOutlined />);
IconMap.set('DingtalkSquareFilled', <DingtalkSquareFilled />);
IconMap.set('DisconnectOutlined', <DisconnectOutlined />);
IconMap.set('DislikeFilled', <DislikeFilled />);
IconMap.set('DislikeOutlined', <DislikeOutlined />);
IconMap.set('DislikeTwoTone', <DislikeTwoTone />);
IconMap.set('DollarCircleFilled', <DollarCircleFilled />);
IconMap.set('DollarCircleOutlined', <DollarCircleOutlined />);
IconMap.set('DollarCircleTwoTone', <DollarCircleTwoTone />);
IconMap.set('DollarOutlined', <DollarOutlined />);
IconMap.set('DollarTwoTone', <DollarTwoTone />);
IconMap.set('DotChartOutlined', <DotChartOutlined />);
IconMap.set('DoubleLeftOutlined', <DoubleLeftOutlined />);
IconMap.set('DoubleRightOutlined', <DoubleRightOutlined />);
IconMap.set('DownCircleFilled', <DownCircleFilled />);
IconMap.set('DownCircleOutlined', <DownCircleOutlined />);
IconMap.set('DownCircleTwoTone', <DownCircleTwoTone />);
IconMap.set('DownOutlined', <DownOutlined />);
IconMap.set('DownSquareFilled', <DownSquareFilled />);
IconMap.set('DownSquareOutlined', <DownSquareOutlined />);
IconMap.set('DownSquareTwoTone', <DownSquareTwoTone />);
IconMap.set('DownloadOutlined', <DownloadOutlined />);
IconMap.set('DragOutlined', <DragOutlined />);
IconMap.set('DribbbleCircleFilled', <DribbbleCircleFilled />);
IconMap.set('DribbbleOutlined', <DribbbleOutlined />);
IconMap.set('DribbbleSquareFilled', <DribbbleSquareFilled />);
IconMap.set('DribbbleSquareOutlined', <DribbbleSquareOutlined />);
IconMap.set('DropboxCircleFilled', <DropboxCircleFilled />);
IconMap.set('DropboxOutlined', <DropboxOutlined />);
IconMap.set('DropboxSquareFilled', <DropboxSquareFilled />);
IconMap.set('EditFilled', <EditFilled />);
IconMap.set('EditOutlined', <EditOutlined />);
IconMap.set('EditTwoTone', <EditTwoTone />);
IconMap.set('EllipsisOutlined', <EllipsisOutlined />);
IconMap.set('EnterOutlined', <EnterOutlined />);
IconMap.set('EnvironmentFilled', <EnvironmentFilled />);
IconMap.set('EnvironmentOutlined', <EnvironmentOutlined />);
IconMap.set('EnvironmentTwoTone', <EnvironmentTwoTone />);
IconMap.set('EuroCircleFilled', <EuroCircleFilled />);
IconMap.set('EuroCircleOutlined', <EuroCircleOutlined />);
IconMap.set('EuroCircleTwoTone', <EuroCircleTwoTone />);
IconMap.set('EuroOutlined', <EuroOutlined />);
IconMap.set('EuroTwoTone', <EuroTwoTone />);
IconMap.set('ExceptionOutlined', <ExceptionOutlined />);
IconMap.set('ExclamationCircleFilled', <ExclamationCircleFilled />);
IconMap.set('ExclamationCircleOutlined', <ExclamationCircleOutlined />);
IconMap.set('ExclamationCircleTwoTone', <ExclamationCircleTwoTone />);
IconMap.set('ExclamationOutlined', <ExclamationOutlined />);
IconMap.set('ExpandAltOutlined', <ExpandAltOutlined />);
IconMap.set('ExpandOutlined', <ExpandOutlined />);
IconMap.set('ExperimentFilled', <ExperimentFilled />);
IconMap.set('ExperimentOutlined', <ExperimentOutlined />);
IconMap.set('ExperimentTwoTone', <ExperimentTwoTone />);
IconMap.set('ExportOutlined', <ExportOutlined />);
IconMap.set('EyeFilled', <EyeFilled />);
IconMap.set('EyeInvisibleFilled', <EyeInvisibleFilled />);
IconMap.set('EyeInvisibleOutlined', <EyeInvisibleOutlined />);
IconMap.set('EyeInvisibleTwoTone', <EyeInvisibleTwoTone />);
IconMap.set('EyeOutlined', <EyeOutlined />);
IconMap.set('EyeTwoTone', <EyeTwoTone />);
IconMap.set('FacebookFilled', <FacebookFilled />);
IconMap.set('FacebookOutlined', <FacebookOutlined />);
IconMap.set('FallOutlined', <FallOutlined />);
IconMap.set('FastBackwardFilled', <FastBackwardFilled />);
IconMap.set('FastBackwardOutlined', <FastBackwardOutlined />);
IconMap.set('FastForwardFilled', <FastForwardFilled />);
IconMap.set('FastForwardOutlined', <FastForwardOutlined />);
IconMap.set('FieldBinaryOutlined', <FieldBinaryOutlined />);
IconMap.set('FieldNumberOutlined', <FieldNumberOutlined />);
IconMap.set('FieldStringOutlined', <FieldStringOutlined />);
IconMap.set('FieldTimeOutlined', <FieldTimeOutlined />);
IconMap.set('FileAddFilled', <FileAddFilled />);
IconMap.set('FileAddOutlined', <FileAddOutlined />);
IconMap.set('FileAddTwoTone', <FileAddTwoTone />);
IconMap.set('FileDoneOutlined', <FileDoneOutlined />);
IconMap.set('FileExcelFilled', <FileExcelFilled />);
IconMap.set('FileExcelOutlined', <FileExcelOutlined />);
IconMap.set('FileExcelTwoTone', <FileExcelTwoTone />);
IconMap.set('FileExclamationFilled', <FileExclamationFilled />);
IconMap.set('FileExclamationOutlined', <FileExclamationOutlined />);
IconMap.set('FileExclamationTwoTone', <FileExclamationTwoTone />);
IconMap.set('FileFilled', <FileFilled />);
IconMap.set('FileGifOutlined', <FileGifOutlined />);
IconMap.set('FileImageFilled', <FileImageFilled />);
IconMap.set('FileImageOutlined', <FileImageOutlined />);
IconMap.set('FileImageTwoTone', <FileImageTwoTone />);
IconMap.set('FileJpgOutlined', <FileJpgOutlined />);
IconMap.set('FileMarkdownFilled', <FileMarkdownFilled />);
IconMap.set('FileMarkdownOutlined', <FileMarkdownOutlined />);
IconMap.set('FileMarkdownTwoTone', <FileMarkdownTwoTone />);
IconMap.set('FileOutlined', <FileOutlined />);
IconMap.set('FilePdfFilled', <FilePdfFilled />);
IconMap.set('FilePdfOutlined', <FilePdfOutlined />);
IconMap.set('FilePdfTwoTone', <FilePdfTwoTone />);
IconMap.set('FilePptFilled', <FilePptFilled />);
IconMap.set('FilePptOutlined', <FilePptOutlined />);
IconMap.set('FilePptTwoTone', <FilePptTwoTone />);
IconMap.set('FileProtectOutlined', <FileProtectOutlined />);
IconMap.set('FileSearchOutlined', <FileSearchOutlined />);
IconMap.set('FileSyncOutlined', <FileSyncOutlined />);
IconMap.set('FileTextFilled', <FileTextFilled />);
IconMap.set('FileTextOutlined', <FileTextOutlined />);
IconMap.set('FileTextTwoTone', <FileTextTwoTone />);
IconMap.set('FileTwoTone', <FileTwoTone />);
IconMap.set('FileUnknownFilled', <FileUnknownFilled />);
IconMap.set('FileUnknownOutlined', <FileUnknownOutlined />);
IconMap.set('FileUnknownTwoTone', <FileUnknownTwoTone />);
IconMap.set('FileWordFilled', <FileWordFilled />);
IconMap.set('FileWordOutlined', <FileWordOutlined />);
IconMap.set('FileWordTwoTone', <FileWordTwoTone />);
IconMap.set('FileZipFilled', <FileZipFilled />);
IconMap.set('FileZipOutlined', <FileZipOutlined />);
IconMap.set('FileZipTwoTone', <FileZipTwoTone />);
IconMap.set('FilterFilled', <FilterFilled />);
IconMap.set('FilterOutlined', <FilterOutlined />);
IconMap.set('FilterTwoTone', <FilterTwoTone />);
IconMap.set('FireFilled', <FireFilled />);
IconMap.set('FireOutlined', <FireOutlined />);
IconMap.set('FireTwoTone', <FireTwoTone />);
IconMap.set('FlagFilled', <FlagFilled />);
IconMap.set('FlagOutlined', <FlagOutlined />);
IconMap.set('FlagTwoTone', <FlagTwoTone />);
IconMap.set('FolderAddFilled', <FolderAddFilled />);
IconMap.set('FolderAddOutlined', <FolderAddOutlined />);
IconMap.set('FolderAddTwoTone', <FolderAddTwoTone />);
IconMap.set('FolderFilled', <FolderFilled />);
IconMap.set('FolderOpenFilled', <FolderOpenFilled />);
IconMap.set('FolderOpenOutlined', <FolderOpenOutlined />);
IconMap.set('FolderOpenTwoTone', <FolderOpenTwoTone />);
IconMap.set('FolderOutlined', <FolderOutlined />);
IconMap.set('FolderTwoTone', <FolderTwoTone />);
IconMap.set('FolderViewOutlined', <FolderViewOutlined />);
IconMap.set('FontColorsOutlined', <FontColorsOutlined />);
IconMap.set('FontSizeOutlined', <FontSizeOutlined />);
IconMap.set('ForkOutlined', <ForkOutlined />);
IconMap.set('FormOutlined', <FormOutlined />);
IconMap.set('FormatPainterFilled', <FormatPainterFilled />);
IconMap.set('FormatPainterOutlined', <FormatPainterOutlined />);
IconMap.set('ForwardFilled', <ForwardFilled />);
IconMap.set('ForwardOutlined', <ForwardOutlined />);
IconMap.set('FrownFilled', <FrownFilled />);
IconMap.set('FrownOutlined', <FrownOutlined />);
IconMap.set('FrownTwoTone', <FrownTwoTone />);
IconMap.set('FullscreenExitOutlined', <FullscreenExitOutlined />);
IconMap.set('FullscreenOutlined', <FullscreenOutlined />);
IconMap.set('FunctionOutlined', <FunctionOutlined />);
IconMap.set('FundFilled', <FundFilled />);
IconMap.set('FundOutlined', <FundOutlined />);
IconMap.set('FundProjectionScreenOutlined', <FundProjectionScreenOutlined />);
IconMap.set('FundTwoTone', <FundTwoTone />);
IconMap.set('FundViewOutlined', <FundViewOutlined />);
IconMap.set('FunnelPlotFilled', <FunnelPlotFilled />);
IconMap.set('FunnelPlotOutlined', <FunnelPlotOutlined />);
IconMap.set('FunnelPlotTwoTone', <FunnelPlotTwoTone />);
IconMap.set('GatewayOutlined', <GatewayOutlined />);
IconMap.set('GifOutlined', <GifOutlined />);
IconMap.set('GiftFilled', <GiftFilled />);
IconMap.set('GiftOutlined', <GiftOutlined />);
IconMap.set('GiftTwoTone', <GiftTwoTone />);
IconMap.set('GithubFilled', <GithubFilled />);
IconMap.set('GithubOutlined', <GithubOutlined />);
IconMap.set('GitlabFilled', <GitlabFilled />);
IconMap.set('GitlabOutlined', <GitlabOutlined />);
IconMap.set('GlobalOutlined', <GlobalOutlined />);
IconMap.set('GoldFilled', <GoldFilled />);
IconMap.set('GoldOutlined', <GoldOutlined />);
IconMap.set('GoldTwoTone', <GoldTwoTone />);
IconMap.set('GoldenFilled', <GoldenFilled />);
IconMap.set('GoogleCircleFilled', <GoogleCircleFilled />);
IconMap.set('GoogleOutlined', <GoogleOutlined />);
IconMap.set('GooglePlusCircleFilled', <GooglePlusCircleFilled />);
IconMap.set('GooglePlusOutlined', <GooglePlusOutlined />);
IconMap.set('GooglePlusSquareFilled', <GooglePlusSquareFilled />);
IconMap.set('GoogleSquareFilled', <GoogleSquareFilled />);
IconMap.set('GroupOutlined', <GroupOutlined />);
IconMap.set('HddFilled', <HddFilled />);
IconMap.set('HddOutlined', <HddOutlined />);
IconMap.set('HddTwoTone', <HddTwoTone />);
IconMap.set('HeartFilled', <HeartFilled />);
IconMap.set('HeartOutlined', <HeartOutlined />);
IconMap.set('HeartTwoTone', <HeartTwoTone />);
IconMap.set('HeatMapOutlined', <HeatMapOutlined />);
IconMap.set('HighlightFilled', <HighlightFilled />);
IconMap.set('HighlightOutlined', <HighlightOutlined />);
IconMap.set('HighlightTwoTone', <HighlightTwoTone />);
IconMap.set('HistoryOutlined', <HistoryOutlined />);
IconMap.set('HomeFilled', <HomeFilled />);
IconMap.set('HomeOutlined', <HomeOutlined />);
IconMap.set('HomeTwoTone', <HomeTwoTone />);
IconMap.set('HourglassFilled', <HourglassFilled />);
IconMap.set('HourglassOutlined', <HourglassOutlined />);
IconMap.set('HourglassTwoTone', <HourglassTwoTone />);
IconMap.set('Html5Filled', <Html5Filled />);
IconMap.set('Html5Outlined', <Html5Outlined />);
IconMap.set('Html5TwoTone', <Html5TwoTone />);
IconMap.set('IdcardFilled', <IdcardFilled />);
IconMap.set('IdcardOutlined', <IdcardOutlined />);
IconMap.set('IdcardTwoTone', <IdcardTwoTone />);
IconMap.set('IeCircleFilled', <IeCircleFilled />);
IconMap.set('IeOutlined', <IeOutlined />);
IconMap.set('IeSquareFilled', <IeSquareFilled />);
IconMap.set('ImportOutlined', <ImportOutlined />);
IconMap.set('InboxOutlined', <InboxOutlined />);
IconMap.set('InfoCircleFilled', <InfoCircleFilled />);
IconMap.set('InfoCircleOutlined', <InfoCircleOutlined />);
IconMap.set('InfoCircleTwoTone', <InfoCircleTwoTone />);
IconMap.set('InfoOutlined', <InfoOutlined />);
IconMap.set('InsertRowAboveOutlined', <InsertRowAboveOutlined />);
IconMap.set('InsertRowBelowOutlined', <InsertRowBelowOutlined />);
IconMap.set('InsertRowLeftOutlined', <InsertRowLeftOutlined />);
IconMap.set('InsertRowRightOutlined', <InsertRowRightOutlined />);
IconMap.set('InstagramFilled', <InstagramFilled />);
IconMap.set('InstagramOutlined', <InstagramOutlined />);
IconMap.set('InsuranceFilled', <InsuranceFilled />);
IconMap.set('InsuranceOutlined', <InsuranceOutlined />);
IconMap.set('InsuranceTwoTone', <InsuranceTwoTone />);
IconMap.set('InteractionFilled', <InteractionFilled />);
IconMap.set('InteractionOutlined', <InteractionOutlined />);
IconMap.set('InteractionTwoTone', <InteractionTwoTone />);
IconMap.set('IssuesCloseOutlined', <IssuesCloseOutlined />);
IconMap.set('ItalicOutlined', <ItalicOutlined />);
IconMap.set('KeyOutlined', <KeyOutlined />);
IconMap.set('LaptopOutlined', <LaptopOutlined />);
IconMap.set('LayoutFilled', <LayoutFilled />);
IconMap.set('LayoutOutlined', <LayoutOutlined />);
IconMap.set('LayoutTwoTone', <LayoutTwoTone />);
IconMap.set('LeftCircleFilled', <LeftCircleFilled />);
IconMap.set('LeftCircleOutlined', <LeftCircleOutlined />);
IconMap.set('LeftCircleTwoTone', <LeftCircleTwoTone />);
IconMap.set('LeftOutlined', <LeftOutlined />);
IconMap.set('LeftSquareFilled', <LeftSquareFilled />);
IconMap.set('LeftSquareOutlined', <LeftSquareOutlined />);
IconMap.set('LeftSquareTwoTone', <LeftSquareTwoTone />);
IconMap.set('LikeFilled', <LikeFilled />);
IconMap.set('LikeOutlined', <LikeOutlined />);
IconMap.set('LikeTwoTone', <LikeTwoTone />);
IconMap.set('LineChartOutlined', <LineChartOutlined />);
IconMap.set('LineHeightOutlined', <LineHeightOutlined />);
IconMap.set('LineOutlined', <LineOutlined />);
IconMap.set('LinkOutlined', <LinkOutlined />);
IconMap.set('LinkedinFilled', <LinkedinFilled />);
IconMap.set('LinkedinOutlined', <LinkedinOutlined />);
IconMap.set('Loading3QuartersOutlined', <Loading3QuartersOutlined />);
IconMap.set('LoadingOutlined', <LoadingOutlined />);
IconMap.set('LockFilled', <LockFilled />);
IconMap.set('LockOutlined', <LockOutlined />);
IconMap.set('LockTwoTone', <LockTwoTone />);
IconMap.set('LoginOutlined', <LoginOutlined />);
IconMap.set('LogoutOutlined', <LogoutOutlined />);
IconMap.set('MacCommandFilled', <MacCommandFilled />);
IconMap.set('MacCommandOutlined', <MacCommandOutlined />);
IconMap.set('MailFilled', <MailFilled />);
IconMap.set('MailOutlined', <MailOutlined />);
IconMap.set('MailTwoTone', <MailTwoTone />);
IconMap.set('ManOutlined', <ManOutlined />);
IconMap.set('MedicineBoxFilled', <MedicineBoxFilled />);
IconMap.set('MedicineBoxOutlined', <MedicineBoxOutlined />);
IconMap.set('MedicineBoxTwoTone', <MedicineBoxTwoTone />);
IconMap.set('MediumCircleFilled', <MediumCircleFilled />);
IconMap.set('MediumOutlined', <MediumOutlined />);
IconMap.set('MediumSquareFilled', <MediumSquareFilled />);
IconMap.set('MediumWorkmarkOutlined', <MediumWorkmarkOutlined />);
IconMap.set('MehFilled', <MehFilled />);
IconMap.set('MehOutlined', <MehOutlined />);
IconMap.set('MehTwoTone', <MehTwoTone />);
IconMap.set('MenuFoldOutlined', <MenuFoldOutlined />);
IconMap.set('MenuOutlined', <MenuOutlined />);
IconMap.set('MenuUnfoldOutlined', <MenuUnfoldOutlined />);
IconMap.set('MergeCellsOutlined', <MergeCellsOutlined />);
IconMap.set('MessageFilled', <MessageFilled />);
IconMap.set('MessageOutlined', <MessageOutlined />);
IconMap.set('MessageTwoTone', <MessageTwoTone />);
IconMap.set('MinusCircleFilled', <MinusCircleFilled />);
IconMap.set('MinusCircleOutlined', <MinusCircleOutlined />);
IconMap.set('MinusCircleTwoTone', <MinusCircleTwoTone />);
IconMap.set('MinusOutlined', <MinusOutlined />);
IconMap.set('MinusSquareFilled', <MinusSquareFilled />);
IconMap.set('MinusSquareOutlined', <MinusSquareOutlined />);
IconMap.set('MinusSquareTwoTone', <MinusSquareTwoTone />);
IconMap.set('MobileFilled', <MobileFilled />);
IconMap.set('MobileOutlined', <MobileOutlined />);
IconMap.set('MobileTwoTone', <MobileTwoTone />);
IconMap.set('MoneyCollectFilled', <MoneyCollectFilled />);
IconMap.set('MoneyCollectOutlined', <MoneyCollectOutlined />);
IconMap.set('MoneyCollectTwoTone', <MoneyCollectTwoTone />);
IconMap.set('MonitorOutlined', <MonitorOutlined />);
IconMap.set('MoreOutlined', <MoreOutlined />);
IconMap.set('NodeCollapseOutlined', <NodeCollapseOutlined />);
IconMap.set('NodeExpandOutlined', <NodeExpandOutlined />);
IconMap.set('NodeIndexOutlined', <NodeIndexOutlined />);
IconMap.set('NotificationFilled', <NotificationFilled />);
IconMap.set('NotificationOutlined', <NotificationOutlined />);
IconMap.set('NotificationTwoTone', <NotificationTwoTone />);
IconMap.set('NumberOutlined', <NumberOutlined />);
IconMap.set('OneToOneOutlined', <OneToOneOutlined />);
IconMap.set('OrderedListOutlined', <OrderedListOutlined />);
IconMap.set('PaperClipOutlined', <PaperClipOutlined />);
IconMap.set('PartitionOutlined', <PartitionOutlined />);
IconMap.set('PauseCircleFilled', <PauseCircleFilled />);
IconMap.set('PauseCircleOutlined', <PauseCircleOutlined />);
IconMap.set('PauseCircleTwoTone', <PauseCircleTwoTone />);
IconMap.set('PauseOutlined', <PauseOutlined />);
IconMap.set('PayCircleFilled', <PayCircleFilled />);
IconMap.set('PayCircleOutlined', <PayCircleOutlined />);
IconMap.set('PercentageOutlined', <PercentageOutlined />);
IconMap.set('PhoneFilled', <PhoneFilled />);
IconMap.set('PhoneOutlined', <PhoneOutlined />);
IconMap.set('PhoneTwoTone', <PhoneTwoTone />);
IconMap.set('PicCenterOutlined', <PicCenterOutlined />);
IconMap.set('PicLeftOutlined', <PicLeftOutlined />);
IconMap.set('PicRightOutlined', <PicRightOutlined />);
IconMap.set('PictureFilled', <PictureFilled />);
IconMap.set('PictureOutlined', <PictureOutlined />);
IconMap.set('PictureTwoTone', <PictureTwoTone />);
IconMap.set('PieChartFilled', <PieChartFilled />);
IconMap.set('PieChartOutlined', <PieChartOutlined />);
IconMap.set('PieChartTwoTone', <PieChartTwoTone />);
IconMap.set('PlayCircleFilled', <PlayCircleFilled />);
IconMap.set('PlayCircleOutlined', <PlayCircleOutlined />);
IconMap.set('PlayCircleTwoTone', <PlayCircleTwoTone />);
IconMap.set('PlaySquareFilled', <PlaySquareFilled />);
IconMap.set('PlaySquareOutlined', <PlaySquareOutlined />);
IconMap.set('PlaySquareTwoTone', <PlaySquareTwoTone />);
IconMap.set('PlusCircleFilled', <PlusCircleFilled />);
IconMap.set('PlusCircleOutlined', <PlusCircleOutlined />);
IconMap.set('PlusCircleTwoTone', <PlusCircleTwoTone />);
IconMap.set('PlusOutlined', <PlusOutlined />);
IconMap.set('PlusSquareFilled', <PlusSquareFilled />);
IconMap.set('PlusSquareOutlined', <PlusSquareOutlined />);
IconMap.set('PlusSquareTwoTone', <PlusSquareTwoTone />);
IconMap.set('PoundCircleFilled', <PoundCircleFilled />);
IconMap.set('PoundCircleOutlined', <PoundCircleOutlined />);
IconMap.set('PoundCircleTwoTone', <PoundCircleTwoTone />);
IconMap.set('PoundOutlined', <PoundOutlined />);
IconMap.set('PoweroffOutlined', <PoweroffOutlined />);
IconMap.set('PrinterFilled', <PrinterFilled />);
IconMap.set('PrinterOutlined', <PrinterOutlined />);
IconMap.set('PrinterTwoTone', <PrinterTwoTone />);
IconMap.set('ProfileFilled', <ProfileFilled />);
IconMap.set('ProfileOutlined', <ProfileOutlined />);
IconMap.set('ProfileTwoTone', <ProfileTwoTone />);
IconMap.set('ProjectFilled', <ProjectFilled />);
IconMap.set('ProjectOutlined', <ProjectOutlined />);
IconMap.set('ProjectTwoTone', <ProjectTwoTone />);
IconMap.set('PropertySafetyFilled', <PropertySafetyFilled />);
IconMap.set('PropertySafetyOutlined', <PropertySafetyOutlined />);
IconMap.set('PropertySafetyTwoTone', <PropertySafetyTwoTone />);
IconMap.set('PullRequestOutlined', <PullRequestOutlined />);
IconMap.set('PushpinFilled', <PushpinFilled />);
IconMap.set('PushpinOutlined', <PushpinOutlined />);
IconMap.set('PushpinTwoTone', <PushpinTwoTone />);
IconMap.set('QqCircleFilled', <QqCircleFilled />);
IconMap.set('QqOutlined', <QqOutlined />);
IconMap.set('QqSquareFilled', <QqSquareFilled />);
IconMap.set('QrcodeOutlined', <QrcodeOutlined />);
IconMap.set('QuestionCircleFilled', <QuestionCircleFilled />);
IconMap.set('QuestionCircleOutlined', <QuestionCircleOutlined />);
IconMap.set('QuestionCircleTwoTone', <QuestionCircleTwoTone />);
IconMap.set('QuestionOutlined', <QuestionOutlined />);
IconMap.set('RadarChartOutlined', <RadarChartOutlined />);
IconMap.set('RadiusBottomleftOutlined', <RadiusBottomleftOutlined />);
IconMap.set('RadiusBottomrightOutlined', <RadiusBottomrightOutlined />);
IconMap.set('RadiusSettingOutlined', <RadiusSettingOutlined />);
IconMap.set('RadiusUpleftOutlined', <RadiusUpleftOutlined />);
IconMap.set('RadiusUprightOutlined', <RadiusUprightOutlined />);
IconMap.set('ReadFilled', <ReadFilled />);
IconMap.set('ReadOutlined', <ReadOutlined />);
IconMap.set('ReconciliationFilled', <ReconciliationFilled />);
IconMap.set('ReconciliationOutlined', <ReconciliationOutlined />);
IconMap.set('ReconciliationTwoTone', <ReconciliationTwoTone />);
IconMap.set('RedEnvelopeFilled', <RedEnvelopeFilled />);
IconMap.set('RedEnvelopeOutlined', <RedEnvelopeOutlined />);
IconMap.set('RedEnvelopeTwoTone', <RedEnvelopeTwoTone />);
IconMap.set('RedditCircleFilled', <RedditCircleFilled />);
IconMap.set('RedditOutlined', <RedditOutlined />);
IconMap.set('RedditSquareFilled', <RedditSquareFilled />);
IconMap.set('RedoOutlined', <RedoOutlined />);
IconMap.set('ReloadOutlined', <ReloadOutlined />);
IconMap.set('RestFilled', <RestFilled />);
IconMap.set('RestOutlined', <RestOutlined />);
IconMap.set('RestTwoTone', <RestTwoTone />);
IconMap.set('RetweetOutlined', <RetweetOutlined />);
IconMap.set('RightCircleFilled', <RightCircleFilled />);
IconMap.set('RightCircleOutlined', <RightCircleOutlined />);
IconMap.set('RightCircleTwoTone', <RightCircleTwoTone />);
IconMap.set('RightOutlined', <RightOutlined />);
IconMap.set('RightSquareFilled', <RightSquareFilled />);
IconMap.set('RightSquareOutlined', <RightSquareOutlined />);
IconMap.set('RightSquareTwoTone', <RightSquareTwoTone />);
IconMap.set('RiseOutlined', <RiseOutlined />);
IconMap.set('RobotFilled', <RobotFilled />);
IconMap.set('RobotOutlined', <RobotOutlined />);
IconMap.set('RocketFilled', <RocketFilled />);
IconMap.set('RocketOutlined', <RocketOutlined />);
IconMap.set('RocketTwoTone', <RocketTwoTone />);
IconMap.set('RollbackOutlined', <RollbackOutlined />);
IconMap.set('RotateLeftOutlined', <RotateLeftOutlined />);
IconMap.set('RotateRightOutlined', <RotateRightOutlined />);
IconMap.set('SafetyCertificateFilled', <SafetyCertificateFilled />);
IconMap.set('SafetyCertificateOutlined', <SafetyCertificateOutlined />);
IconMap.set('SafetyCertificateTwoTone', <SafetyCertificateTwoTone />);
IconMap.set('SafetyOutlined', <SafetyOutlined />);
IconMap.set('SaveFilled', <SaveFilled />);
IconMap.set('SaveOutlined', <SaveOutlined />);
IconMap.set('SaveTwoTone', <SaveTwoTone />);
IconMap.set('ScanOutlined', <ScanOutlined />);
IconMap.set('ScheduleFilled', <ScheduleFilled />);
IconMap.set('ScheduleOutlined', <ScheduleOutlined />);
IconMap.set('ScheduleTwoTone', <ScheduleTwoTone />);
IconMap.set('ScissorOutlined', <ScissorOutlined />);
IconMap.set('SearchOutlined', <SearchOutlined />);
IconMap.set('SecurityScanFilled', <SecurityScanFilled />);
IconMap.set('SecurityScanOutlined', <SecurityScanOutlined />);
IconMap.set('SecurityScanTwoTone', <SecurityScanTwoTone />);
IconMap.set('SelectOutlined', <SelectOutlined />);
IconMap.set('SendOutlined', <SendOutlined />);
IconMap.set('SettingFilled', <SettingFilled />);
IconMap.set('SettingOutlined', <SettingOutlined />);
IconMap.set('SettingTwoTone', <SettingTwoTone />);
IconMap.set('ShakeOutlined', <ShakeOutlined />);
IconMap.set('ShareAltOutlined', <ShareAltOutlined />);
IconMap.set('ShopFilled', <ShopFilled />);
IconMap.set('ShopOutlined', <ShopOutlined />);
IconMap.set('ShopTwoTone', <ShopTwoTone />);
IconMap.set('ShoppingCartOutlined', <ShoppingCartOutlined />);
IconMap.set('ShoppingFilled', <ShoppingFilled />);
IconMap.set('ShoppingOutlined', <ShoppingOutlined />);
IconMap.set('ShoppingTwoTone', <ShoppingTwoTone />);
IconMap.set('ShrinkOutlined', <ShrinkOutlined />);
IconMap.set('SignalFilled', <SignalFilled />);
IconMap.set('SisternodeOutlined', <SisternodeOutlined />);
IconMap.set('SketchCircleFilled', <SketchCircleFilled />);
IconMap.set('SketchOutlined', <SketchOutlined />);
IconMap.set('SketchSquareFilled', <SketchSquareFilled />);
IconMap.set('SkinFilled', <SkinFilled />);
IconMap.set('SkinOutlined', <SkinOutlined />);
IconMap.set('SkinTwoTone', <SkinTwoTone />);
IconMap.set('SkypeFilled', <SkypeFilled />);
IconMap.set('SkypeOutlined', <SkypeOutlined />);
IconMap.set('SlackCircleFilled', <SlackCircleFilled />);
IconMap.set('SlackOutlined', <SlackOutlined />);
IconMap.set('SlackSquareFilled', <SlackSquareFilled />);
IconMap.set('SlackSquareOutlined', <SlackSquareOutlined />);
IconMap.set('SlidersFilled', <SlidersFilled />);
IconMap.set('SlidersOutlined', <SlidersOutlined />);
IconMap.set('SlidersTwoTone', <SlidersTwoTone />);
IconMap.set('SmallDashOutlined', <SmallDashOutlined />);
IconMap.set('SmileFilled', <SmileFilled />);
IconMap.set('SmileOutlined', <SmileOutlined />);
IconMap.set('SmileTwoTone', <SmileTwoTone />);
IconMap.set('SnippetsFilled', <SnippetsFilled />);
IconMap.set('SnippetsOutlined', <SnippetsOutlined />);
IconMap.set('SnippetsTwoTone', <SnippetsTwoTone />);
IconMap.set('SolutionOutlined', <SolutionOutlined />);
IconMap.set('SortAscendingOutlined', <SortAscendingOutlined />);
IconMap.set('SortDescendingOutlined', <SortDescendingOutlined />);
IconMap.set('SoundFilled', <SoundFilled />);
IconMap.set('SoundOutlined', <SoundOutlined />);
IconMap.set('SoundTwoTone', <SoundTwoTone />);
IconMap.set('SplitCellsOutlined', <SplitCellsOutlined />);
IconMap.set('StarFilled', <StarFilled />);
IconMap.set('StarOutlined', <StarOutlined />);
IconMap.set('StarTwoTone', <StarTwoTone />);
IconMap.set('StepBackwardFilled', <StepBackwardFilled />);
IconMap.set('StepBackwardOutlined', <StepBackwardOutlined />);
IconMap.set('StepForwardFilled', <StepForwardFilled />);
IconMap.set('StepForwardOutlined', <StepForwardOutlined />);
IconMap.set('StockOutlined', <StockOutlined />);
IconMap.set('StopFilled', <StopFilled />);
IconMap.set('StopOutlined', <StopOutlined />);
IconMap.set('StopTwoTone', <StopTwoTone />);
IconMap.set('StrikethroughOutlined', <StrikethroughOutlined />);
IconMap.set('SubnodeOutlined', <SubnodeOutlined />);
IconMap.set('SwapLeftOutlined', <SwapLeftOutlined />);
IconMap.set('SwapOutlined', <SwapOutlined />);
IconMap.set('SwapRightOutlined', <SwapRightOutlined />);
IconMap.set('SwitcherFilled', <SwitcherFilled />);
IconMap.set('SwitcherOutlined', <SwitcherOutlined />);
IconMap.set('SwitcherTwoTone', <SwitcherTwoTone />);
IconMap.set('SyncOutlined', <SyncOutlined />);
IconMap.set('TableOutlined', <TableOutlined />);
IconMap.set('TabletFilled', <TabletFilled />);
IconMap.set('TabletOutlined', <TabletOutlined />);
IconMap.set('TabletTwoTone', <TabletTwoTone />);
IconMap.set('TagFilled', <TagFilled />);
IconMap.set('TagOutlined', <TagOutlined />);
IconMap.set('TagTwoTone', <TagTwoTone />);
IconMap.set('TagsFilled', <TagsFilled />);
IconMap.set('TagsOutlined', <TagsOutlined />);
IconMap.set('TagsTwoTone', <TagsTwoTone />);
IconMap.set('TaobaoCircleFilled', <TaobaoCircleFilled />);
IconMap.set('TaobaoCircleOutlined', <TaobaoCircleOutlined />);
IconMap.set('TaobaoOutlined', <TaobaoOutlined />);
IconMap.set('TaobaoSquareFilled', <TaobaoSquareFilled />);
IconMap.set('TeamOutlined', <TeamOutlined />);
IconMap.set('ThunderboltFilled', <ThunderboltFilled />);
IconMap.set('ThunderboltOutlined', <ThunderboltOutlined />);
IconMap.set('ThunderboltTwoTone', <ThunderboltTwoTone />);
IconMap.set('ToTopOutlined', <ToTopOutlined />);
IconMap.set('ToolFilled', <ToolFilled />);
IconMap.set('ToolOutlined', <ToolOutlined />);
IconMap.set('ToolTwoTone', <ToolTwoTone />);
IconMap.set('TrademarkCircleFilled', <TrademarkCircleFilled />);
IconMap.set('TrademarkCircleOutlined', <TrademarkCircleOutlined />);
IconMap.set('TrademarkCircleTwoTone', <TrademarkCircleTwoTone />);
IconMap.set('TrademarkOutlined', <TrademarkOutlined />);
IconMap.set('TransactionOutlined', <TransactionOutlined />);
IconMap.set('TranslationOutlined', <TranslationOutlined />);
IconMap.set('TrophyFilled', <TrophyFilled />);
IconMap.set('TrophyOutlined', <TrophyOutlined />);
IconMap.set('TrophyTwoTone', <TrophyTwoTone />);
IconMap.set('TwitterCircleFilled', <TwitterCircleFilled />);
IconMap.set('TwitterOutlined', <TwitterOutlined />);
IconMap.set('TwitterSquareFilled', <TwitterSquareFilled />);
IconMap.set('UnderlineOutlined', <UnderlineOutlined />);
IconMap.set('UndoOutlined', <UndoOutlined />);
IconMap.set('UngroupOutlined', <UngroupOutlined />);
IconMap.set('UnlockFilled', <UnlockFilled />);
IconMap.set('UnlockOutlined', <UnlockOutlined />);
IconMap.set('UnlockTwoTone', <UnlockTwoTone />);
IconMap.set('UnorderedListOutlined', <UnorderedListOutlined />);
IconMap.set('UpCircleFilled', <UpCircleFilled />);
IconMap.set('UpCircleOutlined', <UpCircleOutlined />);
IconMap.set('UpCircleTwoTone', <UpCircleTwoTone />);
IconMap.set('UpOutlined', <UpOutlined />);
IconMap.set('UpSquareFilled', <UpSquareFilled />);
IconMap.set('UpSquareOutlined', <UpSquareOutlined />);
IconMap.set('UpSquareTwoTone', <UpSquareTwoTone />);
IconMap.set('UploadOutlined', <UploadOutlined />);
IconMap.set('UsbFilled', <UsbFilled />);
IconMap.set('UsbOutlined', <UsbOutlined />);
IconMap.set('UsbTwoTone', <UsbTwoTone />);
IconMap.set('UserAddOutlined', <UserAddOutlined />);
IconMap.set('UserDeleteOutlined', <UserDeleteOutlined />);
IconMap.set('UserOutlined', <UserOutlined />);
IconMap.set('UserSwitchOutlined', <UserSwitchOutlined />);
IconMap.set('UsergroupAddOutlined', <UsergroupAddOutlined />);
IconMap.set('UsergroupDeleteOutlined', <UsergroupDeleteOutlined />);
IconMap.set('VerifiedOutlined', <VerifiedOutlined />);
IconMap.set('VerticalAlignBottomOutlined', <VerticalAlignBottomOutlined />);
IconMap.set('VerticalAlignMiddleOutlined', <VerticalAlignMiddleOutlined />);
IconMap.set('VerticalAlignTopOutlined', <VerticalAlignTopOutlined />);
IconMap.set('VerticalLeftOutlined', <VerticalLeftOutlined />);
IconMap.set('VerticalRightOutlined', <VerticalRightOutlined />);
IconMap.set('VideoCameraAddOutlined', <VideoCameraAddOutlined />);
IconMap.set('VideoCameraFilled', <VideoCameraFilled />);
IconMap.set('VideoCameraOutlined', <VideoCameraOutlined />);
IconMap.set('VideoCameraTwoTone', <VideoCameraTwoTone />);
IconMap.set('WalletFilled', <WalletFilled />);
IconMap.set('WalletOutlined', <WalletOutlined />);
IconMap.set('WalletTwoTone', <WalletTwoTone />);
IconMap.set('WarningFilled', <WarningFilled />);
IconMap.set('WarningOutlined', <WarningOutlined />);
IconMap.set('WarningTwoTone', <WarningTwoTone />);
IconMap.set('WechatFilled', <WechatFilled />);
IconMap.set('WechatOutlined', <WechatOutlined />);
IconMap.set('WeiboCircleFilled', <WeiboCircleFilled />);
IconMap.set('WeiboCircleOutlined', <WeiboCircleOutlined />);
IconMap.set('WeiboOutlined', <WeiboOutlined />);
IconMap.set('WeiboSquareFilled', <WeiboSquareFilled />);
IconMap.set('WeiboSquareOutlined', <WeiboSquareOutlined />);
IconMap.set('WhatsAppOutlined', <WhatsAppOutlined />);
IconMap.set('WifiOutlined', <WifiOutlined />);
IconMap.set('WindowsFilled', <WindowsFilled />);
IconMap.set('WindowsOutlined', <WindowsOutlined />);
IconMap.set('WomanOutlined', <WomanOutlined />);
IconMap.set('YahooFilled', <YahooFilled />);
IconMap.set('YahooOutlined', <YahooOutlined />);
IconMap.set('YoutubeFilled', <YoutubeFilled />);
IconMap.set('YoutubeOutlined', <YoutubeOutlined />);
IconMap.set('YuqueFilled', <YuqueFilled />);
IconMap.set('YuqueOutlined', <YuqueOutlined />);
IconMap.set('ZhihuCircleFilled', <ZhihuCircleFilled />);
IconMap.set('ZhihuOutlined', <ZhihuOutlined />);
IconMap.set('ZhihuSquareFilled', <ZhihuSquareFilled />);
IconMap.set('ZoomInOutlined', <ZoomInOutlined />);
IconMap.set('ZoomOutOutlined', <ZoomOutOutlined />);

export const getIconByType = (type: string) => IconMap.get(type);
