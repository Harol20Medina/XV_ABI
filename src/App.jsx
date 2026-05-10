import React, { useEffect, useRef, useState } from 'react';
import {
  MapPin,
  Calendar,
  Clock,
  MessageCircle,
  Crown,
  Heart,
  Play,
  Pause,
  Music,
  Sparkles
} from 'lucide-react';
import TarjetaInvitacion from './TarjetaInvitacion';

const eventDate = new Date('2026-05-24T17:00:00');

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function update() {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0),
        minutes: Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0),
        seconds: Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0),
      });
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function App() {
  const audioRef = useRef(null);
  const countdown = useCountdown(eventDate);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTarjeta, setShowTarjeta] = useState(false);
  const [invitadoData, setInvitadoData] = useState(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log("Error:", error);
            const onceClick = () => {
              audioRef.current.play();
              setIsPlaying(true);
              document.removeEventListener('click', onceClick);
            };
            document.addEventListener('click', onceClick);
          });
      }
    }
  };

  const handleConfirmacion = (mensaje) => {
    setInvitadoData({ mensaje });
    console.log('Confirmación recibida con mensaje:', mensaje);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayPadding = 5;

  const recuerdoFotos = [
    { src: "abichita1.jpeg", edad: "2 años", descripcion: "Mis primeros pasos" },
    { src: "abichita2.jpeg", edad: "3 años", descripcion: "Descubriendo el mundo" },
    { src: "abichita3.jpeg", edad: "12 años", descripcion: "Creciendo con amor" },
    { src: "abichita4.jpeg", edad: "12 años", descripcion: "Siempre sonriendo" }
  ];

  return (
    <div className="min-h-screen bg-[#DCE4DE] flex justify-center p-0 sm:p-6">
      <div 
        className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden min-h-screen sm:min-h-0 sm:rounded-[3.5rem] border border-[#A8E1B5]/10 flex flex-col"
        style={{
          backgroundImage: `url(flores.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[0.5px]"></div>
        
        <div className="relative z-10 flex flex-col pb-16">
          
          <header className="pt-16 pb-6 px-8 text-center">
            <Crown className="w-14 h-14 text-[#1A2F1A] mx-auto mb-6 opacity-90" />
            <p className="text-[24px] uppercase tracking-[0.7em] text-[#1A2F1A] mb-6 font-semibold">Mis XV Años</p>
            <h1 className="text-7xl font-serif text-[#0A1A12] mb-8 tracking-tight">Abigail</h1>
            <div className="relative mx-auto w-64 h-[400px]">
              <div className="absolute inset-0 border border-[#A8E1B5]/40 -m-3 rounded-t-full"></div>
              <div className="w-full h-full rounded-t-full overflow-hidden shadow-xl border-4 border-white">
                <img src="abi.jpg" alt="Abigail" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="bg-white/90 backdrop-blur-md rounded-full px-5 py-2 shadow-lg border border-[#A8E1B5]/40 inline-flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#A8E1B5]/20 flex items-center justify-center">
                  <Music size={14} className="text-[#1A2F1A]" />
                </div>
                <div className="text-left">
                  <p className="text-[8px] uppercase tracking-wider text-[#1A2F1A] font-bold">Canción</p>
                  <p className="text-[10px] font-serif text-[#0A1A12]">Música especial</p>
                </div>
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A8E1B5] to-[#6BA37A] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95"
                >
                  {isPlaying ? (
                    <Pause size={18} className="text-white" />
                  ) : (
                    <Play size={18} className="text-white ml-0.5" />
                  )}
                </button>
              </div>
            </div>
            
            <p className="mt-8 text-[15px] font-light text-[#0A1A12] italic max-w-xs mx-auto">
              "Un día para soñar, un momento para recordar, y una vida entera para agradecer."
            </p>
          </header>

          <section className="py-10 px-8 text-center">
            <Heart size={18} className="mx-auto mb-4 text-[#1A2F1A]" />
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#1A2F1A] mb-6 font-bold">Con el amor de mis padres</p>
            <div className="space-y-2">
              <p className="text-xl font-serif text-[#0A1A12]">Elías Pastor Paz Suárez</p>
              <p className="text-xl font-serif text-[#0A1A12]">Ruth Victoria Zárate Landa</p>
            </div>
          </section>

          <section className="py-14 px-8 text-center bg-white/40 border-y border-[#A8E1B5]/10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#1A2F1A] mb-6">Falta muy poco para el gran día</p>
            <div className="flex justify-between max-w-[280px] mx-auto gap-4">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-serif mb-1 text-[#0A1A12]">{countdown.days < 10 ? `0${countdown.days}` : countdown.days}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#1A2F1A] font-bold">Días</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-serif mb-1 text-[#0A1A12]">{countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#1A2F1A] font-bold">Horas</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-serif mb-1 text-[#0A1A12]">{countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#1A2F1A] font-bold">Min</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-serif mb-1 text-[#0A1A12]">{countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#1A2F1A] font-bold">Seg</span>
              </div>
            </div>
          </section>

          <section className="py-16 px-8 text-center">
            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar size={18} className="text-[#1A2F1A]" />
                <span className="font-serif text-xl text-[#0A1A12]">Domingo 24 de Mayo, 2026</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock size={18} className="text-[#1A2F1A]" />
                <span className="font-serif text-xl text-[#0A1A12]">5:00 PM</span>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur p-6 rounded-3xl border border-[#A8E1B5]/30 max-w-[280px] mx-auto">
              <p className="text-[10px] uppercase tracking-widest text-[#1A2F1A] mb-4 font-bold">Mayo 2026</p>
              <div className="grid grid-cols-7 gap-y-2 text-[9px] font-medium text-stone-600">
                <span>D</span><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span>
                {Array(startDayPadding).fill(null).map((_, i) => <span key={i}></span>)}
                {days.map(day => (
                  <span key={day} className={`h-7 w-7 flex items-center justify-center mx-auto rounded-full text-xs transition-all ${
                    day === 24 
                      ? 'bg-[#A8E1B5] text-white font-bold shadow-md scale-110 ring-2 ring-[#6BA37A]/30' 
                      : 'text-[#0A1A12]'
                  }`}>
                    {day}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-[#A8E1B5]/20">
                <p className="text-[9px] text-[#1A2F1A] font-semibold">🎉 Día especial marcado 🎉</p>
              </div>
            </div>
          </section>

          <section className="px-8 py-6 text-center">
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-[#A8E1B5]/20">
              <div className="flex items-center justify-center gap-10 mb-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A8E1B5] to-[#6BA37A] flex items-center justify-center shadow-lg p-2">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/25/25978.png"
                    alt="Terno"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A8E1B5] to-[#6BA37A] flex items-center justify-center shadow-lg p-2">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/26/26819.png"
                    alt="Vestido"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-2 italic text-[#0A1A12]">Vestimenta</h3>
              <p className="text-[11px] uppercase tracking-widest text-[#1A2F1A] font-bold mb-3">Sport Elegante</p>
              <p className="text-[12px] text-stone-600 italic">✨ Cómodos pero elegantes, queremos verte brillar ✨</p>
            </div>
          </section>

          <section className="px-8 py-6">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[3rem] shadow-lg border border-[#A8E1B5]/20 text-center">
              <MapPin size={24} className="mx-auto text-[#1A2F1A] mb-4" />
              <h3 className="font-serif text-2xl mb-3 italic text-[#0A1A12]">Recepción</h3>
              <p className="text-[10px] font-bold text-[#1A2F1A] tracking-widest mb-2 uppercase">Asociación Santa Rosa</p>
              <p className="text-xs text-stone-600 mb-6 font-light">Jr. Las Hortensias 123, Urb. San Ignacio</p>
              <a 
                href="https://maps.app.goo.gl/P7cct6BP4A2Rzjk46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full py-4 rounded-full bg-[#2D3A32] text-[#A8E1B5] text-[10px] uppercase tracking-widest font-bold transition-all hover:bg-[#3A4D42]"
              >
                Ver ubicación
              </a>
            </div>
          </section>

          <section className="px-8 py-8 text-center">
            <div className="bg-[#A8E1B5] text-white p-8 rounded-[3rem] shadow-xl">
               <MessageCircle size={28} className="mx-auto mb-4 text-[#0A1A12]" />
               <h3 className="font-serif text-3xl mb-3 italic text-[#0A1A12]">Asistencia</h3>
               <p className="text-[8px] uppercase tracking-widest mb-5 font-bold opacity-90 text-[#0A1A12]">Confirmar antes del 17 de Mayo</p>
               {/* Botón cambiado de <a> a <button> para abrir el modal */}
               <button 
                 onClick={() => setShowTarjeta(true)}
                 className="inline-block w-full py-4 bg-white text-[#6BA37A] rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-[#F0F4F1]"
               >
                 Confirmar asistencia por WhatsApp
               </button>
               
            </div>
          </section>

          <footer className="px-8 py-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <Sparkles size={16} className="text-[#1A2F1A]" />
              <h3 className="font-serif text-3xl italic text-[#0A1A12]">Recuerdos</h3>
              <Sparkles size={16} className="text-[#1A2F1A]" />
            </div>
            <p className="text-[9px] uppercase tracking-widest text-[#1A2F1A] mb-6 font-bold">✨ Momentos que atesoro ✨</p>
            
            <div className="flex flex-col gap-5 max-w-[300px] mx-auto">
              {recuerdoFotos.map((foto, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 border border-[#A8E1B5]/40 rounded-2xl rotate-1 group-hover:rotate-0 transition-all"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-white h-72">
                    <img 
                      src={foto.src} 
                      alt={foto.descripcion}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=Foto";
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <p className="text-white text-sm font-bold">{foto.edad}</p>
                      <p className="text-white/80 text-[10px]">{foto.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <div className="w-12 h-px bg-[#A8E1B5] mx-auto mb-5"></div>
              <p className="font-serif text-5xl text-[#1A2F1A] italic">Abigail</p>
              <p className="text-[12px] text-[#1A2F1A] mt-2">✦ XV Años ✦</p>
            </div>
          </footer>
        </div>

        <audio ref={audioRef} src="music.mpeg" loop preload="auto" />
      </div>

      {/* Tarjeta de invitación modal */}
      <TarjetaInvitacion 
        isOpen={showTarjeta}
        onClose={() => setShowTarjeta(false)}
        onConfirm={handleConfirmacion}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        body { 
          font-family: 'Playfair Display', serif; 
          margin: 0; 
          padding: 0; 
        }
        .font-serif { 
          font-family: 'Playfair Display', serif; 
        }
        ::-webkit-scrollbar { 
          width: 0px; 
        }
        * { 
          -webkit-tap-highlight-color: transparent; 
        }
      `}</style>
    </div>
  );
}