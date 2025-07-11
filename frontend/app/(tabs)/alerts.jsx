import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import PageTitle from "../../components/PageTitle";

const Alert = ({
  title,
  description,
  icon,
  time,
  onSelectMap,
  onSelectDetails,
}) => (
  <View className="p-4 w-full border-b border-x-0">
    <View className="flex-row items-center">
      <MaterialCommunityIcons
        name={icon}
        size={32}
        color="rgb(50, 180, 200)" // phase2Buttons
      />
      <Text className="text-xl font-bold text-phase2Titles dark:text-phase2TitlesDark ml-2">
        {title}
      </Text>
      <Text className="text-xs text-phase2SecondaryTxt dark:text-phase2SecondaryTxtDark ml-auto">
        {time}
      </Text>
    </View>
    <View className="flex flex-row">
      <Text className="text-base text-phase2SecondaryTxt dark:text-phase2SecondaryTxtDark my-2">
        {description}
      </Text>
      <View>
        <TouchableOpacity
          className="bg-phase2Buttons dark:bg-phase2ButtonsDark rounded-lg justify-center items-center w-auto h-10 mb-1 ml-auto"
          onPress={onSelectMap}
        >
          <Text className="text-phase2SmallTxt dark:text-phase2TitlesDark font-bold text-base px-2">
            Ver en mapa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-phase2Buttons dark:bg-phase2ButtonsDark rounded-lg justify-center items-center w-auto h-10 ml-auto"
          onPress={onSelectDetails}
        >
          <Text className="text-phase2SmallTxt dark:text-phase2TitlesDark font-bold text-base px-2">
            Más detalles
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function SubscriptionScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 px-5">
      <StatusBar style="light" />
      <PageTitle>Historial de alertas</PageTitle>
      <View className="flex-1 items-center">
        <Alert
          title="Alerta 1"
          description="Accede a todas las funciones premium con soporte dedicado y más."
          icon="antenna"
          time="Hace 2 horas"
          onSelectDetails={() =>
            router.push({
              pathname: "/alerts-info",
              params: { plan: "Plan Pro" },
            })
          }
          onSelectMap={() =>
            router.push({
              pathname: "/",
              params: { plan: "Plan Pro" },
            })
          }
        />
        <Alert
          title="Alerta 2"
          description="Disfruta de funciones esenciales para empezar."
          icon="antenna"
          time="Hace 1 dia"
          onSelectDetails={() =>
            router.push({
              pathname: "/alerts-info",
              params: { plan: "Plan Básico" },
            })
          }
          onSelectMap={() =>
            router.push({
              pathname: "/",
              params: { plan: "Plan Pro" },
            })
          }
        />
        <Alert
          title="Alerta 3"
          description="Soluciones avanzadas para equipos y empresas."
          icon="antenna"
          time="Hace 28 horas"
          onSelectDetails={() =>
            router.push({
              pathname: "/alerts-info",
              params: { plan: "Plan Empresarial" },
            })
          }
          onSelectMap={() =>
            router.push({
              pathname: "/",
              params: { plan: "Plan Pro" },
            })
          }
        />
        <Alert
          title="Alerta 4"
          description="Protege tus datos con cobertura avanzada."
          icon="antenna"
          time="Hace 34 horas"
          onSelectDetails={() =>
            router.push({
              pathname: "/alerts-info",
              params: { plan: "Plan Con Seguro" },
            })
          }
          onSelectMap={() =>
            router.push({
              pathname: "/",
              params: { plan: "Plan Pro" },
            })
          }
        />
        <Alert
          title="Alerta 5"
          description="Soluciones avanzadas para instituciones públicas."
          icon="antenna"
          time="Hace 48 horas"
          onSelectDetails={() =>
            router.push({
              pathname: "/alerts-info",
              params: { plan: "Plan De Gobierno" },
            })
          }
          onSelectMap={() =>
            router.push({
              pathname: "/",
              params: { plan: "Plan Pro" },
            })
          }
        />
      </View>
    </View>
  );
}
