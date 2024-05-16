/**
 * Generated by @openapi-codegen
 *
 * @version 2.4.0
 */
export type AccessToken = {
  access_token: string;
  token_type: string;
};

/**
 * Various account types that can be created in Hyperion.
 * These values should match GroupType's. They are the lower level groups in Hyperion
 */
export type AccountType =
  | "39691052-2ae5-4e12-99d0-7a9f5f2b0136"
  | "ab4c7503-41b3-11ee-8177-089798f1a4a5"
  | "703056c4-be9d-475c-aa51-b7fc62a96aaa"
  | "29751438-103c-42f2-b09b-33fbb20758a7"
  | "b1cd979e-ecc1-4bd0-bc2b-4dad2ba8cded"
  | "ae4d1866-e7d9-4d7f-bee7-e0dda24d8dd8";

export type AdvertBase = {
  title: string;
  content: string;
  advertiser_id: string;
  tags?: string | null;
};

export type AdvertReturnComplete = {
  title: string;
  content: string;
  advertiser_id: string;
  tags?: string | null;
  id: string;
  advertiser: AdvertiserComplete;
  date?: string | null;
};

export type AdvertUpdate = {
  title?: string | null;
  content?: string | null;
  tags?: string | null;
};

export type AdvertiserBase = {
  name: string;
  /**
   * The group manager id should be a group identifier
   */
  group_manager_id: string;
};

export type AdvertiserComplete = {
  name: string;
  /**
   * The group manager id should be a group identifier
   */
  group_manager_id: string;
  id: string;
};

export type AdvertiserUpdate = {
  name?: string | null;
  group_manager_id?: string | null;
};

export type AmapSlotType = "midi" | "soir";

export type Applicant = {
  name: string;
  firstname: string;
  nickname?: string | null;
  id: string;
  email: string;
  promo?: number | null;
  phone?: string | null;
};

export type AssociationBase = {
  name: string;
  kind: Kinds;
  mandate_year: number;
  description?: string | null;
};

export type AssociationComplete = {
  name: string;
  kind: Kinds;
  mandate_year: number;
  description?: string | null;
  id: string;
};

export type AssociationEdit = {
  name?: string | null;
  kind?: Kinds | null;
  description?: string | null;
  mandate_year?: number | null;
};

/**
 * Return a dictionary of {key: error message} indicating which element of failed.
 */
export type BatchResult = {
  failed: {
    [key: string]: string;
  };
};

export type BodyAuthorizeValidationAuthAuthorizationFlowAuthorizeValidationPost =
  {
    client_id: string;
    redirect_uri?: string;
    response_type: string;
    scope?: string | null;
    state?: string | null;
    nonce?: string | null;
    code_challenge?: string | null;
    code_challenge_method?: string | null;
    email: string;
    password: string;
  };

export type BodyCreateAdvertImageAdvertAdvertsAdvertIdPicturePost = {
  /**
   * @format binary
   */
  image: Blob;
};

export type BodyCreateAssociationLogoPhonebookAssociationsAssociationIdPicturePost =
  {
    /**
     * @format binary
     */
    image: Blob;
  };

export type BodyCreateCampaignsLogoCampaignListsListIdLogoPost = {
  /**
   * @format binary
   */
  image: Blob;
};

export type BodyCreateCampaignsLogoCinemaSessionsSessionIdPosterPost = {
  /**
   * @format binary
   */
  image: Blob;
};

export type BodyCreateCurrentRaffleLogoTombolaRafflesRaffleIdLogoPost = {
  /**
   * @format binary
   */
  image: Blob;
};

export type BodyCreateCurrentUserProfilePictureUsersMeProfilePicturePost = {
  /**
   * @format binary
   */
  image: Blob;
};

export type BodyCreatePaperPdfAndCoverPhPaperIdPdfPost = {
  /**
   * @format binary
   */
  pdf: Blob;
};

export type BodyCreatePrizePictureTombolaPrizesPrizeIdPicturePost = {
  /**
   * @format binary
   */
  image: Blob;
};

export type BodyCreateRecommendationImageRecommendationRecommendationsRecommendationIdPicturePost =
  {
    /**
     * @format binary
     */
    image: Blob;
  };

export type BodyLoginForAccessTokenAuthSimpleTokenPost = {
  grant_type?: string | null;
  username: string;
  password: string;
  /**
   * @default
   */
  scope?: string;
  client_id?: string | null;
  client_secret?: string | null;
};

export type BodyPostAuthorizePageAuthAuthorizePost = {
  response_type: string;
  client_id: string;
  redirect_uri: string;
  scope?: string | null;
  state?: string | null;
  nonce?: string | null;
  code_challenge?: string | null;
  code_challenge_method?: string | null;
};

export type BodyRecoverUserUsersRecoverPost = {
  email: string;
};

export type BodyRegisterFirebaseDeviceNotificationDevicesPost = {
  firebase_token: string;
};

export type BodyTokenAuthTokenPost = {
  refresh_token?: string | null;
  grant_type: string;
  code?: string | null;
  redirect_uri?: string | null;
  client_id?: string | null;
  client_secret?: string | null;
  code_verifier?: string | null;
};

export type BodyUploadDocumentRaidDocumentDocumentIdPost = {
  /**
   * @format binary
   */
  image: Blob;
};

export type BookingBase = {
  reason: string;
  /**
   * @format date-time
   */
  start: string;
  /**
   * @format date-time
   */
  end: string;
  /**
   * @format date-time
   */
  creation: string;
  note?: string | null;
  room_id: string;
  key: boolean;
  recurrence_rule?: string | null;
  entity?: string | null;
};

export type BookingEdit = {
  reason?: string | null;
  start?: string | null;
  end?: string | null;
  note?: string | null;
  room_id?: string | null;
  key?: boolean | null;
  recurrence_rule?: string | null;
  entity?: string | null;
};

export type BookingReturn = {
  reason: string;
  /**
   * @format date-time
   */
  start: string;
  /**
   * @format date-time
   */
  end: string;
  /**
   * @format date-time
   */
  creation: string;
  note?: string | null;
  room_id: string;
  key: boolean;
  recurrence_rule?: string | null;
  entity?: string | null;
  id: string;
  decision: Decision;
  applicant_id: string;
  room: RoomComplete;
};

export type BookingReturnApplicant = {
  reason: string;
  /**
   * @format date-time
   */
  start: string;
  /**
   * @format date-time
   */
  end: string;
  /**
   * @format date-time
   */
  creation: string;
  note?: string | null;
  room_id: string;
  key: boolean;
  recurrence_rule?: string | null;
  entity?: string | null;
  id: string;
  decision: Decision;
  applicant_id: string;
  room: RoomComplete;
  applicant: Applicant;
};

export type BookingReturnSimpleApplicant = {
  reason: string;
  /**
   * @format date-time
   */
  start: string;
  /**
   * @format date-time
   */
  end: string;
  /**
   * @format date-time
   */
  creation: string;
  note?: string | null;
  room_id: string;
  key: boolean;
  recurrence_rule?: string | null;
  entity?: string | null;
  id: string;
  decision: Decision;
  applicant_id: string;
  room: RoomComplete;
  applicant: CoreUserSimple;
};

export type CalendarEventType =
  | "Event AE"
  | "Event USE"
  | "Asso ind\u00E9"
  | "HH"
  | "Strass"
  | "Rewass"
  | "Autre";

export type CashComplete = {
  balance: number;
  user_id: string;
  user: CoreUserSimple;
};

export type CashEdit = {
  balance: number;
};

export type ChangePasswordRequest = {
  email: string;
  old_password: string;
  new_password: string;
};

export type CineSessionBase = {
  /**
   * @format date-time
   */
  start: string;
  duration: number;
  name: string;
  overview?: string | null;
  genre?: string | null;
  tagline?: string | null;
};

export type CineSessionComplete = {
  /**
   * @format date-time
   */
  start: string;
  duration: number;
  name: string;
  overview?: string | null;
  genre?: string | null;
  tagline?: string | null;
  id: string;
};

export type CineSessionUpdate = {
  name?: string | null;
  start?: string | null;
  duration?: number | null;
  overview?: string | null;
  genre?: string | null;
  tagline?: string | null;
};

/**
 * Schema for batch membership deletion
 */
export type CoreBatchDeleteMembership = {
  group_id: string;
};

/**
 * Schema for batch membership creation
 */
export type CoreBatchMembership = {
  user_emails: string[];
  group_id: string;
  description?: string | null;
};

/**
 * The schema is used for batch account creation requests. An account type should be provided
 */
export type CoreBatchUserCreateRequest = {
  email: string;
  account_type: AccountType;
  /**
   * @default false
   */
  external?: boolean;
};

/**
 * Schema for group's model similar to core_group table in database
 */
export type CoreGroup = {
  name: string;
  description?: string | null;
  id: string;
  members?: CoreUserSimple[];
};

/**
 * Model for group creation schema
 */
export type CoreGroupCreate = {
  name: string;
  description?: string | null;
};

/**
 * Simplified schema for group's model, used when getting all groups
 */
export type CoreGroupSimple = {
  name: string;
  description?: string | null;
  id: string;
};

/**
 * Schema for group update
 */
export type CoreGroupUpdate = {
  name?: string | null;
  description?: string | null;
};

/**
 * Information about Hyperion
 */
export type CoreInformation = {
  ready: boolean;
  version: string;
  minimal_titan_version_code: number;
  minimal_titan_version: string;
};

/**
 * Schema for membership creation (allows adding a user to a group)
 */
export type CoreMembership = {
  user_id: string;
  group_id: string;
  description?: string | null;
};

export type CoreMembershipDelete = {
  user_id: string;
  group_id: string;
};

/**
 * Schema for user's model similar to core_user table in database
 */
export type CoreUser = {
  name: string;
  firstname: string;
  nickname?: string | null;
  id: string;
  email: string;
  birthday?: string | null;
  promo?: number | null;
  floor?: FloorsType | null;
  phone?: string | null;
  created_on?: string | null;
  groups?: CoreGroupSimple[];
};

export type CoreUserActivateRequest = {
  name: string;
  firstname: string;
  nickname?: string | null;
  activation_token: string;
  password: string;
  birthday?: string | null;
  phone?: string | null;
  floor?: FloorsType | null;
  /**
   * Promotion of the student, an integer like 21
   */
  promo?: number | null;
};

/**
 * The schema is used to send an account creation request.
 */
export type CoreUserCreateRequest = {
  email: string;
  /**
   * Allow Hyperion to create an external user. Without this, Hyperion will only allow non external students to be created. The email address will be used to determine if the user should be external or not. An external user may not have an ECL email address, he won't be able to access most features.
   *
   * @default false
   */
  accept_external?: boolean;
};

/**
 * Simplified schema for user's model, used when getting all users
 */
export type CoreUserSimple = {
  name: string;
  firstname: string;
  nickname?: string | null;
  id: string;
};

/**
 * Schema for user update
 */
export type CoreUserUpdate = {
  nickname?: string | null;
  birthday?: string | null;
  phone?: string | null;
  floor?: FloorsType | null;
};

export type CoreUserUpdateAdmin = {
  name?: string | null;
  firstname?: string | null;
  promo?: number | null;
  nickname?: string | null;
  birthday?: string | null;
  phone?: string | null;
  floor?: FloorsType | null;
  external?: boolean | null;
};

export type Decision = "approved" | "declined" | "pending";

/**
 * Base schema for AMAP deliveries
 */
export type DeliveryBase = {
  /**
   * @format date
   */
  delivery_date: string;
  products_ids?: string[];
};

export type DeliveryProductsUpdate = {
  products_ids: string[];
};

export type DeliveryReturn = {
  /**
   * @format date
   */
  delivery_date: string;
  products?: ProductComplete[];
  id: string;
  status: DeliveryStatusType;
};

export type DeliveryStatusType =
  | "creation"
  | "orderable"
  | "locked"
  | "delivered"
  | "archived";

export type DeliveryUpdate = {
  delivery_date?: string | null;
};

export type Difficulty = "discovery" | "sports" | "expert";

export type Document = {
  type: DocumentType;
  name: string;
  id: string;
  /**
   * @format date
   */
  uploaded_at: string;
  validation: DocumentValidation;
};

export type DocumentCreation = {
  type: DocumentType;
  name: string;
  id: string;
};

export type DocumentModel = {
  id?: number | null;
  fileName?: string | null;
  publicUrl?: string | null;
};

export type DocumentType =
  | "idCard"
  | "medicalCertificate"
  | "studentCard"
  | "raidRules"
  | "parentAuthorization";

export type DocumentValidation =
  | "pending"
  | "accepted"
  | "refused"
  | "temporary";

export type EventApplicant = {
  name: string;
  firstname: string;
  nickname?: string | null;
  id: string;
  email: string;
  promo?: number | null;
  phone?: string | null;
};

export type EventBase = {
  name: string;
  organizer: string;
  /**
   * @format date-time
   */
  start: string;
  /**
   * @format date-time
   */
  end: string;
  all_day: boolean;
  location: string;
  type: CalendarEventType;
  description: string;
  recurrence_rule?: string | null;
};

export type EventComplete = {
  name: string;
  organizer: string;
  /**
   * @format date-time
   */
  start: string;
  /**
   * @format date-time
   */
  end: string;
  all_day: boolean;
  location: string;
  type: CalendarEventType;
  description: string;
  recurrence_rule?: string | null;
  id: string;
  decision: Decision;
  applicant_id: string;
};

export type EventEdit = {
  name?: string | null;
  organizer?: string | null;
  start?: string | null;
  end?: string | null;
  all_day?: boolean | null;
  location?: string | null;
  type?: CalendarEventType | null;
  description?: string | null;
  recurrence_rule?: string | null;
};

export type EventReturn = {
  name: string;
  organizer: string;
  /**
   * @format date-time
   */
  start: string;
  /**
   * @format date-time
   */
  end: string;
  all_day: boolean;
  location: string;
  type: CalendarEventType;
  description: string;
  recurrence_rule?: string | null;
  id: string;
  decision: Decision;
  applicant_id: string;
  applicant: EventApplicant;
};

export type FieldType =
  | "Date"
  | "TextInput"
  | "FreeText"
  | "ChoiceList"
  | "File"
  | "YesNo"
  | "Phone"
  | "Zipcode"
  | "Number";

export type FirebaseDevice = {
  /**
   * The Hyperion user id
   */
  user_id: string;
  /**
   * @default Firebase device token
   */
  firebase_device_token?: string;
};

export type FlappyBirdScoreBase = {
  value: number;
};

/**
 * A score, with it's position in the best players leaderboard
 */
export type FlappyBirdScoreCompleteFeedBack = {
  value: number;
  user: CoreUserSimple;
  /**
   * @format date-time
   */
  creation_time: string;
  position: number;
};

export type FlappyBirdScoreInDB = {
  value: number;
  user: CoreUserSimple;
  /**
   * @format date-time
   */
  creation_time: string;
  /**
   * @format uuid
   */
  id: string;
  user_id: string;
};

export type FloorsType =
  | "Autre"
  | "Adoma"
  | "Exte"
  | "T1"
  | "T2"
  | "T3"
  | "T4"
  | "T56"
  | "U1"
  | "U2"
  | "U3"
  | "U4"
  | "U56"
  | "V1"
  | "V2"
  | "V3"
  | "V45"
  | "V6"
  | "X1"
  | "X2"
  | "X3"
  | "X4"
  | "X5"
  | "X6";

export type FormNotificationResultContent = {
  eventType: void;
  data: FormPublicModel;
};

export type FormPublicModel = {
  organizationLogo?: string | null;
  organizationName?: string | null;
  tiers?: TierPublicModel[] | null;
  activityType?: string | null;
  activityTypeId?: number | null;
  place?: PlaceModel | null;
  saleEndDate?: string | null;
  saleStartDate?: string | null;
  validityType?: MembershipValidityType | null;
  banner?: DocumentModel | null;
  currency?: string | null;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  logo?: DocumentModel | null;
  meta?: MetaModel | null;
  state?: FormState | null;
  title?: string | null;
  privateTitle?: string | null;
  widgetButtonUrl?: string | null;
  widgetFullUrl?: string | null;
  widgetVignetteHorizontalUrl?: string | null;
  widgetVignetteVerticalUrl?: string | null;
  widgetCounterUrl?: string | null;
  formSlug?: string | null;
  formType?: FormType | null;
  url?: string | null;
  organizationSlug?: string | null;
};

export type FormState = "Public" | "Private" | "Draft" | "Disabled";

export type FormType =
  | "CrowdFunding"
  | "Membership"
  | "Event"
  | "Donation"
  | "PaymentForm"
  | "Checkout"
  | "Shop";

export type GeoLocation = {
  latitude?: number | null;
  longitude?: number | null;
};

export type HTTPValidationError = {
  detail?: ValidationError[];
};

export type Information = {
  manager: string;
  link: string;
  description: string;
};

export type InformationEdit = {
  manager?: string | null;
  link?: string | null;
  description?: string | null;
};

export type InviteToken = {
  team_id: string;
  token: string;
};

export type Item = {
  name: string;
  suggested_caution: number;
  total_quantity: number;
  /**
   * duration in seconds
   */
  suggested_lending_duration: number;
  id: string;
  loaner_id: string;
  loaned_quantity: number;
};

/**
 * Base schema for item's model
 */
export type ItemBase = {
  name: string;
  suggested_caution: number;
  total_quantity: number;
  /**
   * duration in seconds
   */
  suggested_lending_duration: number;
};

/**
 * A schema used to represent Item in a loan with its quantity in a request by the client
 */
export type ItemBorrowed = {
  item_id: string;
  quantity: number;
};

export type ItemCustomField = {
  id?: number | null;
  name?: string | null;
  type?: FieldType | null;
  answer?: string | null;
};

export type ItemDiscount = {
  code?: string | null;
  amount?: number | null;
};

export type ItemOption = {
  name?: string | null;
  amount?: number | null;
  priceCategory?: PriceCategory | null;
  isRequired?: boolean | null;
  customFields?: ItemCustomField[] | null;
  optionId?: number | null;
};

/**
 * A schema used to represent Item in a loan with its quantity in a response to the client
 */
export type ItemQuantity = {
  quantity: number;
  itemSimple: ItemSimple;
};

export type ItemSimple = {
  id: string;
  name: string;
  loaner_id: string;
};

export type ItemState = "Processed" | "Registered" | "Unknown" | "Canceled";

export type ItemUpdate = {
  name?: string | null;
  suggested_caution?: number | null;
  total_quantity?: number | null;
  /**
   * duration in seconds
   */
  suggested_lending_duration?: number | null;
};

export type Kinds =
  | "Comit\u00E9"
  | "Section AE"
  | "Club AE"
  | "Section USE"
  | "Club USE"
  | "Asso ind\u00E9";

export type KindsReturn = {
  kinds: Kinds[];
};

/**
 * Base schema for a list.
 */
export type ListBase = {
  name: string;
  description: string;
  type: ListType;
  section_id: string;
  members: ListMemberBase[];
  program?: string | null;
};

export type ListEdit = {
  name?: string | null;
  description?: string | null;
  type?: ListType | null;
  members?: ListMemberBase[] | null;
  program?: string | null;
};

export type ListMemberBase = {
  user_id: string;
  role: string;
};

export type ListMemberComplete = {
  user_id: string;
  role: string;
  user: CoreUserSimple;
};

export type ListReturn = {
  id: string;
  name: string;
  description: string;
  type: ListType;
  section: SectionComplete;
  members: ListMemberComplete[];
  program?: string | null;
};

/**
 * A list can be "Serios" or "Pipo". There will also be one "Blank" list by section that will be automatically added when the vote is open.
 */
export type ListType = "Serio" | "Pipo" | "Blank";

/**
 * A complete representation of a Loan which can be sent by the API
 */
export type Loan = {
  borrower_id: string;
  loaner_id: string;
  /**
   * @format date
   */
  start: string;
  /**
   * @format date
   */
  end: string;
  notes?: string | null;
  caution?: string | null;
  id: string;
  returned: boolean;
  returned_date: string | null;
  items_qty: ItemQuantity[];
  borrower: CoreUserSimple;
  loaner: Loaner;
};

/**
 * A schema used to create a new loan
 */
export type LoanCreation = {
  borrower_id: string;
  loaner_id: string;
  /**
   * @format date
   */
  start: string;
  /**
   * @format date
   */
  end: string;
  notes?: string | null;
  caution?: string | null;
  items_borrowed: ItemBorrowed[];
};

export type LoanExtend = {
  /**
   * A new return date for the Loan
   */
  end?: string | null;
  /**
   * The duration by which the loan should be extended in seconds
   */
  duration?: number | null;
};

/**
 * When the client asks to update the Loan with a PATCH request, they should be able to change the loan items.
 */
export type LoanUpdate = {
  borrower_id?: string | null;
  start?: string | null;
  end?: string | null;
  notes?: string | null;
  caution?: string | null;
  returned?: boolean | null;
  items_borrowed?: ItemBorrowed[] | null;
};

export type Loaner = {
  name: string;
  /**
   * The group manager id should by a group identifier
   */
  group_manager_id: string;
  id: string;
};

export type LoanerBase = {
  name: string;
  /**
   * The group manager id should by a group identifier
   */
  group_manager_id: string;
};

export type LoanerUpdate = {
  name?: string | null;
  group_manager_id?: string | null;
};

export type MailMigrationRequest = {
  new_email: string;
};

export type Manager = {
  name: string;
  group_id: string;
  id: string;
};

export type ManagerBase = {
  name: string;
  group_id: string;
};

export type ManagerUpdate = {
  name?: string | null;
  group_id?: string | null;
};

export type MeetingPlace = "centrale" | "bellecour" | "anyway";

export type MemberComplete = {
  name: string;
  firstname: string;
  nickname?: string | null;
  id: string;
  email: string;
  phone?: string | null;
  promo?: number | null;
  memberships: MembershipComplete[];
};

export type MembershipBase = {
  user_id: string;
  association_id: string;
  mandate_year: number;
  role_name: string;
  role_tags?: string | null;
};

export type MembershipComplete = {
  user_id: string;
  association_id: string;
  mandate_year: number;
  role_name: string;
  role_tags?: string | null;
  id: string;
};

export type MembershipEdit = {
  role_name?: string | null;
  role_tags?: string | null;
};

export type MembershipValidityType = "MovingYear" | "Custom" | "Illimited";

export type Message = {
  /**
   * A context represents a topic. There can only by one notification per context.
   */
  context: string;
  /**
   * A message can be visible or not, if it is not visible, it should only trigger an action
   */
  is_visible: boolean;
  title?: string | null;
  content?: string | null;
  /**
   * An identifier for the module that should be triggered when the notification is clicked
   */
  action_module?: string | null;
  action_table?: string | null;
  /**
   * The date the notification should be shown
   */
  delivery_datetime?: string | null;
  /**
   * @format date-time
   */
  expire_on: string;
};

export type MetaModel = {
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModuleVisibility = {
  root: string;
  allowed_group_ids: string[];
};

export type ModuleVisibilityCreate = {
  root: string;
  allowed_group_id: string;
};

export type OperationState =
  | "UNKNOWN"
  | "INIT"
  | "PROCESSING"
  | "PROCESSED"
  | "ERROR"
  | "INTERNAL_ERROR";

export type OrderAmountModel = {
  total?: number | null;
  vat?: number | null;
  discount?: number | null;
};

export type OrderBase = {
  user_id: string;
  delivery_id: string;
  products_ids: string[];
  collection_slot: AmapSlotType;
  products_quantity: number[];
};

export type OrderDetail = {
  payer?: Payer | null;
  items?: OrderItem[] | null;
  payments?: OrderPayment[] | null;
  amount?: OrderAmountModel | null;
  id?: number | null;
  date?: string | null;
  formSlug?: string | null;
  formType?: FormType | null;
  organizationName?: string | null;
  organizationSlug?: string | null;
  organizationType?: OrganizationType | null;
  organizationIsUnderColucheLaw?: boolean | null;
  checkoutIntentId?: number | null;
  meta?: MetaModel | null;
};

export type OrderEdit = {
  products_ids?: string[] | null;
  collection_slot?: AmapSlotType | null;
  products_quantity?: number[] | null;
};

export type OrderItem = {
  payments?: SharePayment[] | null;
  name?: string | null;
  user?: User | null;
  priceCategory?: PriceCategory | null;
  minAmount?: number | null;
  discount?: ItemDiscount | null;
  customFields?: ItemCustomField[] | null;
  options?: ItemOption[] | null;
  ticketUrl?: string | null;
  qrCode?: string | null;
  membershipCardUrl?: string | null;
  dayOfLevy?: number | null;
  tierDescription?: string | null;
  tierId?: number | null;
  comment?: string | null;
  id?: number | null;
  amount?: number | null;
  type?: TierType | null;
  initialAmount?: number | null;
  state?: ItemState | null;
};

export type OrderLight = {
  id?: number | null;
  date?: string | null;
  formSlug?: string | null;
  formType?: FormType | null;
  organizationName?: string | null;
  organizationSlug?: string | null;
  organizationType?: OrganizationType | null;
  organizationIsUnderColucheLaw?: boolean | null;
  checkoutIntentId?: number | null;
  meta?: MetaModel | null;
};

/**
 * metadata should contain the metadata sent while creating the checkout intent in `InitCheckoutBody`
 */
export type OrderNotificationResultContent = {
  eventType: void;
  data: OrderDetail;
  metadata?: Record<string, any> | null;
};

export type OrderPayment = {
  items?: ShareItem[] | null;
  cashOutDate?: string | null;
  cashOutState?: PaymentCashOutState | null;
  paymentReceiptUrl?: string | null;
  fiscalReceiptUrl?: string | null;
  id?: number | null;
  amount?: number | null;
  amountTip?: number | null;
  date?: string | null;
  paymentMeans?: PaymentMeans | null;
  installmentNumber?: number | null;
  state?: PaymentState | null;
  type?: PaymentType | null;
  meta?: MetaModel | null;
  paymentOffLineMean?: PaymentMeans | null;
  refundOperations?: RefundOperationLightModel[] | null;
};

export type OrderReturn = {
  user: CoreUserSimple;
  delivery_id: string;
  productsdetail: ProductQuantity[];
  collection_slot: AmapSlotType;
  order_id: string;
  amount: number;
  /**
   * @format date-time
   */
  ordering_date: string;
  /**
   * @format date
   */
  delivery_date: string;
};

export type OrganizationNotificationResultContent = {
  eventType: void;
  data: OrganizationNotificationResultData;
};

export type OrganizationNotificationResultData = {
  old_slug_organization: string;
  new_slug_organization: string;
};

export type OrganizationType =
  | "Association1901Rig"
  | "Association1901Rup"
  | "Association1901"
  | "FondationRup"
  | "FondDotation"
  | "FondationSousEgide"
  | "FondationScientifique"
  | "FondationPartenariale"
  | "FondationUniversitaire"
  | "FondationHospitaliere"
  | "Association1905"
  | "Association1905Rup"
  | "Entreprise"
  | "Cooperative"
  | "Etablissement"
  | "Association1908"
  | "Association1908Rig"
  | "Association1908Rup";

export type PackTicketBase = {
  price: number;
  pack_size: number;
  raffle_id: string;
};

export type PackTicketEdit = {
  raffle_id?: string | null;
  price?: number | null;
  pack_size?: number | null;
};

export type PackTicketSimple = {
  price: number;
  pack_size: number;
  raffle_id: string;
  id: string;
};

/**
 * Base schema for paper's model
 */
export type PaperBase = {
  name: string;
  /**
   * @format date
   */
  release_date: string;
};

export type PaperComplete = {
  name: string;
  /**
   * @format date
   */
  release_date: string;
  id: string;
};

export type PaperUpdate = {
  name?: string | null;
  release_date?: string | null;
};

export type Participant = {
  name: string;
  firstname: string;
  /**
   * @format date
   */
  birthday: string;
  phone: string;
  email: string;
  id: string;
  bike_size: Size | null;
  t_shirt_size: Size | null;
  situation: string | null;
  validation_progress: number;
  payment: boolean;
  number_of_document: number;
  number_of_validated_document: number;
  address: string | null;
  other_school?: string | null;
  company?: string | null;
  diet?: string | null;
  id_card: Document | null;
  medical_certificate: Document | null;
  security_file: SecurityFile | null;
  student_card?: Document | null;
  raid_rules?: Document | null;
  parent_authorization?: Document | null;
  attestation_on_honour: boolean;
  is_minor: boolean;
};

export type ParticipantBase = {
  name: string;
  firstname: string;
  /**
   * @format date
   */
  birthday: string;
  phone: string;
  email: string;
};

export type ParticipantPreview = {
  name: string;
  firstname: string;
  /**
   * @format date
   */
  birthday: string;
  phone: string;
  email: string;
  id: string;
  bike_size: Size | null;
  t_shirt_size: Size | null;
  situation: string | null;
  validation_progress: number;
  payment: boolean;
  number_of_document: number;
  number_of_validated_document: number;
};

export type ParticipantUpdate = {
  name?: string | null;
  firstname?: string | null;
  birthday?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  bike_size?: Size | null;
  t_shirt_size?: Size | null;
  situation?: string | null;
  other_school?: string | null;
  company?: string | null;
  diet?: string | null;
  attestation_on_honour?: boolean | null;
};

/**
 * metadata should contain the metadata sent while creating the checkout intent in `InitCheckoutBody`
 */
export type PayementNotificationResultContent = {
  eventType: void;
  data: PaymentDetail;
  metadata?: Record<string, any> | null;
};

export type Payer = {
  email?: string | null;
  address?: string | null;
  city?: string | null;
  zipCode?: string | null;
  country?: string | null;
  company?: string | null;
  dateOfBirth?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};

export type PaymentCashOutState =
  | "MoneyIn"
  | "CantTransferReceiverFull"
  | "Transfered"
  | "Refunded"
  | "Refunding"
  | "WaitingForCashOutConfirmation"
  | "CashedOut"
  | "Unknown"
  | "Contested"
  | "TransferInProgress";

export type PaymentDetail = {
  order?: OrderLight | null;
  payer?: Payer | null;
  items?: PaymentItem[] | null;
  cashOutDate?: string | null;
  cashOutState?: PaymentCashOutState | null;
  paymentReceiptUrl?: string | null;
  fiscalReceiptUrl?: string | null;
  id?: number | null;
  amount?: number | null;
  amountTip?: number | null;
  date?: string | null;
  paymentMeans?: PaymentMeans | null;
  installmentNumber?: number | null;
  state?: PaymentState | null;
  type?: PaymentType | null;
  meta?: MetaModel | null;
  paymentOffLineMean?: PaymentMeans | null;
  refundOperations?: RefundOperationLightModel[] | null;
};

export type PaymentFrequencyType = "Single" | "Installment" | "Monthly";

export type PaymentItem = {
  shareAmount?: number | null;
  shareItemAmount?: number | null;
  shareOptionsAmount?: number | null;
  id?: number | null;
  amount?: number | null;
  type?: TierType | null;
  initialAmount?: number | null;
  state?: ItemState | null;
  name?: string | null;
};

export type PaymentMeans =
  | "None"
  | "Card"
  | "Check"
  | "Cash"
  | "BankTransfer"
  | "Other";

export type PaymentState =
  | "Pending"
  | "Authorized"
  | "Refused"
  | "Unknown"
  | "Registered"
  | "Refunded"
  | "Refunding"
  | "Contested";

export type PaymentType = "Offline" | "Credit" | "Debit";

export type PlaceModel = {
  address?: string | null;
  name?: string | null;
  city?: string | null;
  zipCode?: string | null;
  country?: string | null;
  geoLocation?: GeoLocation | null;
};

export type PriceCategory = "Fixed" | "Pwyw" | "Free";

export type PrizeBase = {
  name: string;
  description: string;
  raffle_id: string;
  quantity: number;
};

export type PrizeEdit = {
  raffle_id?: string | null;
  description?: string | null;
  name?: string | null;
  quantity?: number | null;
};

export type PrizeSimple = {
  name: string;
  description: string;
  raffle_id: string;
  quantity: number;
  id: string;
};

export type ProductComplete = {
  name: string;
  price: number;
  category: string;
  id: string;
};

export type ProductEdit = {
  category?: string | null;
  name?: string | null;
  price?: number | null;
};

export type ProductQuantity = {
  quantity: number;
  product: ProductComplete;
};

export type ProductSimple = {
  name: string;
  price: number;
  category: string;
};

/**
 * Base schema for raffles
 */
export type RaffleBase = {
  name: string;
  status?: RaffleStatusType | null;
  description?: string | null;
  group_id: string;
};

export type RaffleComplete = {
  name: string;
  status?: RaffleStatusType | null;
  description?: string | null;
  group_id: string;
  id: string;
};

export type RaffleEdit = {
  name?: string | null;
  description?: string | null;
};

export type RaffleStats = {
  tickets_sold: number;
  amount_raised: number;
};

export type RaffleStatusType = "creation" | "open" | "lock";

export type RaidDriveFoldersCreation = {
  parent_folder_id: string;
};

export type RaidInformation = {
  raid_start_date?: string | null;
  raid_end_date?: string | null;
  raid_registering_end_date?: string | null;
  payment_link?: string | null;
  contact?: string | null;
};

export type RaidPrice = {
  student_price?: number | null;
  partner_price?: number | null;
  t_shirt_price?: number | null;
};

export type Recommendation = {
  title: string;
  code?: string | null;
  summary: string;
  description: string;
  /**
   * @format uuid
   */
  id: string;
  /**
   * @format date-time
   */
  creation: string;
};

export type RecommendationBase = {
  title: string;
  code?: string | null;
  summary: string;
  description: string;
};

export type RecommendationEdit = {
  title?: string | null;
  code?: string | null;
  summary?: string | null;
  description?: string | null;
};

export type RefundOperationLightModel = {
  id?: number | null;
  amount?: number | null;
  amountTip?: number | null;
  status?: OperationState | null;
  meta?: MetaModel | null;
};

export type ResetPasswordRequest = {
  reset_token: string;
  new_password: string;
};

export type RoleTagsReturn = {
  tags: string[];
};

export type RoomBase = {
  name: string;
  manager_id: string;
};

export type RoomComplete = {
  name: string;
  manager_id: string;
  id: string;
};

/**
 * Base schema for a section.
 */
export type SectionBase = {
  name: string;
  description: string;
};

export type SectionComplete = {
  name: string;
  description: string;
  id: string;
};

export type SecurityFile = {
  allergy?: string | null;
  asthma: boolean;
  intensive_care_unit?: boolean | null;
  intensive_care_unit_when?: string | null;
  ongoing_treatment?: string | null;
  sicknesses?: string | null;
  hospitalization?: string | null;
  surgical_operation?: string | null;
  trauma?: string | null;
  family?: string | null;
  emergency_person_firstname?: string | null;
  emergency_person_name?: string | null;
  emergency_person_phone?: string | null;
  id: string;
  file_id?: string | null;
  validation: DocumentValidation;
};

export type SecurityFileBase = {
  allergy?: string | null;
  asthma: boolean;
  intensive_care_unit?: boolean | null;
  intensive_care_unit_when?: string | null;
  ongoing_treatment?: string | null;
  sicknesses?: string | null;
  hospitalization?: string | null;
  surgical_operation?: string | null;
  trauma?: string | null;
  family?: string | null;
  emergency_person_firstname?: string | null;
  emergency_person_name?: string | null;
  emergency_person_phone?: string | null;
  id: string;
  file_id?: string | null;
};

export type ShareItem = {
  id?: number | null;
  shareAmount?: number | null;
  shareItemAmount?: number | null;
  shareOptionsAmount?: number | null;
};

export type SharePayment = {
  id?: number | null;
  shareAmount?: number | null;
};

export type Size = "XS" | "S" | "M" | "L" | "XL";

/**
 * Status of the voting
 */
export type StatusType =
  | "waiting"
  | "open"
  | "closed"
  | "counting"
  | "published";

export type Team = {
  name: string;
  id: string;
  number: number | null;
  captain: Participant;
  second: Participant | null;
  difficulty: Difficulty | null;
  meeting_place: MeetingPlace | null;
  validation_progress: number;
  file_id: string | null;
};

export type TeamBase = {
  name: string;
};

export type TeamPreview = {
  name: string;
  id: string;
  number: number | null;
  captain: ParticipantPreview;
  second: ParticipantPreview | null;
  difficulty: Difficulty | null;
  meeting_place: MeetingPlace | null;
  validation_progress: number;
};

export type TeamUpdate = {
  name?: string | null;
  number?: number | null;
  difficulty?: Difficulty | null;
  meeting_place?: MeetingPlace | null;
};

export type TermModel = {
  date?: string | null;
  amount?: number | null;
};

export type TicketComplete = {
  pack_id: string;
  user_id: string;
  winning_prize?: string | null;
  id: string;
  prize?: PrizeSimple | null;
  pack_ticket: PackTicketSimple;
  user: CoreUserSimple;
};

export type TicketSimple = {
  pack_id: string;
  user_id: string;
  winning_prize?: string | null;
  id: string;
};

export type TierPublicModel = {
  id?: number | null;
  label?: string | null;
  description?: string | null;
  tierType?: TierType | null;
  price?: number | null;
  vatRate?: number | null;
  minAmount?: number | null;
  paymentFrequency?: PaymentFrequencyType | null;
  maxPerUser?: number | null;
  meta?: MetaModel | null;
  saleStartDate?: string | null;
  saleEndDate?: string | null;
  isEligibleTaxReceipt?: boolean | null;
  terms?: TermModel[] | null;
  picture?: DocumentModel | null;
};

export type TierType =
  | "Donation"
  | "Payment"
  | "Registration"
  | "Membership"
  | "MonthlyDonation"
  | "MonthlyPayment"
  | "OfflineDonation"
  | "Contribution"
  | "Bonus"
  | "Product";

export type TokenResponse = {
  access_token: string;
  /**
   * @default bearer
   */
  token_type?: string;
  /**
   * @default 1800
   */
  expires_in?: number;
  /**
   * @default
   */
  scope?: string;
  refresh_token: string;
  id_token?: string | null;
};

/**
 * A list of topics. An user can suscribe to a topic to receive notifications about it.
 */
export type Topic =
  | "cinema"
  | "advert"
  | "amap"
  | "booking"
  | "event"
  | "loan"
  | "raffle"
  | "vote"
  | "ph";

export type User = {
  firstName?: string | null;
  lastName?: string | null;
};

export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};

/**
 * Base schema for a vote.
 */
export type VoteBase = {
  list_id: string;
};

export type VoteStats = {
  section_id: string;
  count: number;
};

export type VoteStatus = {
  status: StatusType;
};

/**
 * Base schema for voters (groups allowed to vote).
 */
export type VoterGroup = {
  group_id: string;
};

export type AppCoreStandardResponsesResult = {
  /**
   * @default true
   */
  success?: boolean;
};

export type AppModulesCampaignSchemasCampaignResult = {
  list_id: string;
  count: number;
};
