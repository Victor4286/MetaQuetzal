import { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";

const CATEGORY_BG = {
  3: "bg-phase3bg",
  4: "bg-phase4bg",
  5: "bg-phase5bg",
};

const distanceKm = 100
const etaHours = 14

const MOCK_ALERT = {
  category: 3,
  title: "Huracán Otis · Categoría 3",
  message: "Otis está cada vez más cerca: solo " + distanceKm + "km y se estima que llegará en " + etaHours + " horas. Prepárate para evacuar y sigue las indicaciones oficiales.",
};

export default function AlarmScreenMock() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(t);
  }, []);

  const router = useRouter();
  const handleMap = () => {
    setVisible(false);
    router.push("/");       // Ruta del mapa
  };
  const handleClose = () => setVisible(false);

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={handleClose}>
      <View className="flex-1 justify-center items-center bg-black/70">
        <View
          className={`w-11/12 max-w-md rounded-2xl p-6 shadow-xl ${
            CATEGORY_BG[MOCK_ALERT.category]
          }`}
        >
          {/* Título */}
          <Text className="text-2xl font-extrabold text-phase2Titles text-center mb-4">
            {MOCK_ALERT.title}
          </Text>

          {/* Mensaje breve */}
          <Text className="text-base text-phase2Titles text-center mb-6">
            {MOCK_ALERT.message}
          </Text>

          {/* Datos clave */}
          {/* <View className="space-y-1 mb-8">
            <Stat label="Distancia" value={`${MOCK_ALERT.distanceKm} km`} />
            <Stat label="ETA" value={`${MOCK_ALERT.etaHours} h`} />
            <Stat label="Viento" value={`${MOCK_ALERT.windKmh} km/h`} />
            <Stat label="Ráfagas" value={`${MOCK_ALERT.gustKmh} km/h`} />
            <Stat label="Presión" value={`${MOCK_ALERT.pressureMb} mb`} />
            <Stat label="Lluvia 1 h" value={`${MOCK_ALERT.rain1h} mm`} />
            <Stat label="Prob. lluvia" value={`${Math.round(MOCK_ALERT.pop * 100)} %`} />
          </View> */}

          {/* Botones */}
          <View className="flex-row justify-between mb-6">
            <TouchableOpacity
              onPress={handleMap}
              className="flex-1 mr-2 py-3 rounded-lg bg-white/60 items-center"
            >
              <Text className="font-bold text-phase2Titles">Ver en el mapa</Text>
            </TouchableOpacity>

            <Link href="/alerts-info" asChild>
              <TouchableOpacity className="flex-1 ml-2 py-3 rounded-lg bg-white/60 items-center">
                <Text className="font-bold text-phase2Titles">Más información</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Cerrar */}
          <TouchableOpacity onPress={handleClose} className="py-2 rounded-lg bg-white items-center">
            <Text className="font-bold text-phase2Titles">Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

function Stat({ label, value }) {
  return (
    <Text className="text-phase2Titles">
      <Text className="font-bold">{label}: </Text>
      {value}
    </Text>
  );
}
