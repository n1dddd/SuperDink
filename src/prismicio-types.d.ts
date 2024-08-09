// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice = BlogPostSlice;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
	/**
	 * Blog_Title field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Slice Zone field in *Blog*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
	 * Meta Title field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: blog.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: blog.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Blog*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<BlogDocumentData>,
	'blog',
	Lang
>;

type PageDocumentDataSlicesSlice = BlogPostSlice | NewsSlotSlice | GamesListSlice | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
	/**
	 * Link field in *Settings → Nav Item*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Settings → Nav Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Name field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Nav Item field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

	/**
	 * CTA Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.cta_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	cta_link: prismic.LinkField;

	/**
	 * CTA Label field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.cta_label
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	cta_label: prismic.KeyTextField;

	/**
	 * Insta Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.insta_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	insta_link: prismic.LinkField;

	/**
	 * X Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.x_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	x_link: prismic.LinkField /**
	 * Meta Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_title
	 * - **Tab**: MetaData
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_description
	 * - **Tab**: MetaData
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * OG Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.og_image
	 * - **Tab**: MetaData
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = BlogDocument | PageDocument | SettingsDocument;

/**
 * Primary content in *BlogPost → Default → Primary*
 */
export interface BlogPostSliceDefaultPrimary {
	/**
	 * news_description field in *BlogPost → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog_post.default.primary.news_description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	news_description: prismic.RichTextField;

	/**
	 * news_title field in *BlogPost → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog_post.default.primary.news_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	news_title: prismic.KeyTextField;

	/**
	 * news_image field in *BlogPost → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog_post.default.primary.news_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	news_image: prismic.ImageField<never>;

	/**
	 * news_time field in *BlogPost → Default → Primary*
	 *
	 * - **Field Type**: Timestamp
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog_post.default.primary.news_time
	 * - **Documentation**: https://prismic.io/docs/field#timestamp
	 */
	news_time: prismic.TimestampField;
}

/**
 * Default variation for BlogPost Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogPostSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BlogPostSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *BlogPost*
 */
type BlogPostSliceVariation = BlogPostSliceDefault;

/**
 * BlogPost Shared Slice
 *
 * - **API ID**: `blog_post`
 * - **Description**: BlogPost
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogPostSlice = prismic.SharedSlice<'blog_post', BlogPostSliceVariation>;

/**
 * Item in *GamesList → Default → Primary → Item*
 */
export interface GamesListSliceDefaultPrimaryItemItem {
	/**
	 * Game Name field in *GamesList → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: games_list.default.primary.item[].game_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	game_name: prismic.KeyTextField;

	/**
	 * Tech_color field in *GamesList → Default → Primary → Item*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: games_list.default.primary.item[].tech_color
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	tech_color: prismic.ColorField;

	/**
	 * Game_Logo field in *GamesList → Default → Primary → Item*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: games_list.default.primary.item[].game_logo
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	game_logo: prismic.ImageField<never>;
}

/**
 * Primary content in *GamesList → Default → Primary*
 */
export interface GamesListSliceDefaultPrimary {
	/**
	 * Heading field in *GamesList → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: games_list.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Item field in *GamesList → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: games_list.default.primary.item[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	item: prismic.GroupField<Simplify<GamesListSliceDefaultPrimaryItemItem>>;
}

/**
 * Default variation for GamesList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GamesListSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<GamesListSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *GamesList*
 */
type GamesListSliceVariation = GamesListSliceDefault;

/**
 * GamesList Shared Slice
 *
 * - **API ID**: `games_list`
 * - **Description**: GamesList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GamesListSlice = prismic.SharedSlice<'games_list', GamesListSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Title_1 field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.title_1
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title_1: prismic.KeyTextField;

	/**
	 * title_2 field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.title_2
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title_2: prismic.KeyTextField;

	/**
	 * title_3 field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.title_3
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title_3: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Item in *NewsSlot → Default → Primary → News_item*
 */
export interface NewsSlotSliceDefaultPrimaryNewsItemItem {
	/**
	 * News_title field in *NewsSlot → Default → Primary → News_item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: news_slot.default.primary.news_item[].news_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	news_title: prismic.KeyTextField;

	/**
	 * news_link field in *NewsSlot → Default → Primary → News_item*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: news_slot.default.primary.news_item[].news_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	news_link: prismic.LinkField;

	/**
	 * news_image field in *NewsSlot → Default → Primary → News_item*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: news_slot.default.primary.news_item[].news_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	news_image: prismic.ImageField<never>;

	/**
	 *  news_blurb field in *NewsSlot → Default → Primary → News_item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: news_slot.default.primary.news_item[].news_blurb
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	news_blurb: prismic.KeyTextField;
}

/**
 * Primary content in *NewsSlot → Default → Primary*
 */
export interface NewsSlotSliceDefaultPrimary {
	/**
	 * News_Heading field in *NewsSlot → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: news_slot.default.primary.news_header
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	news_header: prismic.KeyTextField;

	/**
	 * News_item field in *NewsSlot → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: news_slot.default.primary.news_item[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	news_item: prismic.GroupField<Simplify<NewsSlotSliceDefaultPrimaryNewsItemItem>>;
}

/**
 * Default variation for NewsSlot Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsSlotSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<NewsSlotSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *NewsSlot*
 */
type NewsSlotSliceVariation = NewsSlotSliceDefault;

/**
 * NewsSlot Shared Slice
 *
 * - **API ID**: `news_slot`
 * - **Description**: NewsSlot
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsSlotSlice = prismic.SharedSlice<'news_slot', NewsSlotSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			BlogDocument,
			BlogDocumentData,
			BlogDocumentDataSlicesSlice,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataNavItemItem,
			AllDocumentTypes,
			BlogPostSlice,
			BlogPostSliceDefaultPrimary,
			BlogPostSliceVariation,
			BlogPostSliceDefault,
			GamesListSlice,
			GamesListSliceDefaultPrimaryItemItem,
			GamesListSliceDefaultPrimary,
			GamesListSliceVariation,
			GamesListSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			NewsSlotSlice,
			NewsSlotSliceDefaultPrimaryNewsItemItem,
			NewsSlotSliceDefaultPrimary,
			NewsSlotSliceVariation,
			NewsSlotSliceDefault
		};
	}
}
