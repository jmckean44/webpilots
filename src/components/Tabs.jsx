import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../styles/tabs.css';

const TabsDemo = () => (
	<Tabs.Root className="TabsRoot" defaultValue="tab1">
		<Tabs.List className="TabsList" aria-label="Manage your account">
			<Tabs.Trigger className="TabsTrigger" value="tab1">
				Tab 1
			</Tabs.Trigger>
			<Tabs.Trigger className="TabsTrigger" value="tab2">
				Tab 2
			</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content className="TabsContent" value="tab1">
			<p className="Text">Make changes to your account here. Click save when you're done.</p>
		</Tabs.Content>
		<Tabs.Content className="TabsContent" value="tab2">
			<p className="Text">Change your password here. After saving, you'll be logged out.</p>
		</Tabs.Content>
	</Tabs.Root>
);

export default TabsDemo;
