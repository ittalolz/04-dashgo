import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebardrawerContext = createContext<SidebarDrawerContextData>(
  {} as SidebarDrawerContextData
);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [asPath]);

  return (
    <SidebardrawerContext.Provider value={disclosure}>
      {children}
    </SidebardrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebardrawerContext);
