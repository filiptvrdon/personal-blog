import { FC } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';

// Core styles for react-notion-x
import 'react-notion-x/src/styles.css';

// Optional: for syntax highlighting
import 'prismjs/themes/prism-tomorrow.css';

// Optional: for katex math support
import 'katex/dist/katex.min.css';

interface NotionPageProps {
	recordMap: ExtendedRecordMap;
	rootPageId?: string;
}

const NotionPage: FC<NotionPageProps> = ({ recordMap, rootPageId }) => {
	return (
		<NotionRenderer
			recordMap={recordMap}
			fullPage={true}
			darkMode={false}
			rootPageId={rootPageId}
			previewImages={true}
			showCollectionViewDropdown={false}
			showTableOfContents={true}
			minTableOfContentsItems={3}
			defaultPageIcon="📄"
			defaultPageCover=""
			defaultPageCoverPosition={0.5}
			mapPageUrl={(pageId) => `/notion/${pageId}`}
			components={{
				// You can customize components here
				// Code: ({ block, defaultProps }) => (
				//   <Code {...defaultProps} />
				// ),
			}}
		/>
	);
};

export default NotionPage;
