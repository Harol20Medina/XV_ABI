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
  Music
} from 'lucide-react';

/**
 * Fecha del evento: Sábado 24 de Mayo de 2026 - 5:00 PM
 */
const eventDate = new Date('2026-05-24T17:00:00');

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

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

  // Función para play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        console.log("Música pausada");
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              console.log("Música reproduciéndose");
            })
            .catch((error) => {
              console.log("Error al reproducir:", error);
              alert("Haz clic en cualquier parte de la pantalla para activar el audio");
              // Forzar con un click del usuario
              const onceClick = () => {
                audioRef.current.play();
                setIsPlaying(true);
                document.removeEventListener('click', onceClick);
              };
              document.addEventListener('click', onceClick);
            });
        }
      }
    }
  };

  // Calendario Mayo 2026
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayPadding = 5;

  // WhatsApp: +51 934 119 126
  const whatsappNumber = "51934119126";
  const whatsappMessage = encodeURIComponent("¡Hola! ✨ Quiero confirmar mi asistencia a los XV años de Abigail. ¡No me lo pierdo por nada! 💃🎉");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#F0F4F1] flex justify-center p-0 sm:p-6 text-[#2D3A32]">
      <div 
        className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden min-h-screen sm:min-h-0 sm:rounded-[3.5rem] border border-[#A8E1B5]/10 flex flex-col"
        style={{
          backgroundImage: `url(flores.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Capa blanca semitransparente */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]"></div>
        
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col">
          
          {/* Header con foto principal */}
          <header className="pt-20 pb-8 px-8 text-center">
            <Crown className="w-8 h-8 text-[#A8E1B5] mx-auto mb-6 opacity-80" />
            <p className="text-[10px] uppercase tracking-[0.7em] text-[#6BA37A] mb-6 font-semibold">Mis XV Años</p>
            <h1 className="text-6xl font-serif text-[#2D3A32] mb-10 tracking-tight">Abigail</h1>
            <div className="relative mx-auto w-64 h-[400px]">
              <div className="absolute inset-0 border border-[#A8E1B5]/40 -m-3 rounded-t-full"></div>
              <div className="w-full h-full rounded-t-full overflow-hidden shadow-xl border-4 border-white">
                <img src="abi.jpeg" alt="Abigail" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* REPRODUCTOR DE MÚSICA ELEGANTE - CORREGIDO */}
            <div className="mt-8 flex justify-center">
              <div className="bg-white/90 backdrop-blur-md rounded-full px-5 py-2 shadow-lg border border-[#A8E1B5]/40 inline-flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#A8E1B5]/20 flex items-center justify-center">
                  <Music size={14} className="text-[#6BA37A]" />
                </div>
                <div className="text-left">
                  <p className="text-[8px] uppercase tracking-wider text-[#6BA37A] font-bold">Canción</p>
                  <p className="text-[10px] font-serif text-[#2D3A32]">Música especial</p>
                </div>
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A8E1B5] to-[#6BA37A] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95"
                  style={{ cursor: 'pointer' }}
                >
                  {isPlaying ? (
                    <Pause size={18} className="text-white" />
                  ) : (
                    <Play size={18} className="text-white ml-0.5" />
                  )}
                </button>
              </div>
            </div>
            
            <p className="mt-8 text-sm font-light text-stone-500 italic max-w-xs mx-auto">
              "Un día para soñar, un momento para recordar, y una vida entera para agradecer."
            </p>
          </header>

          {/* Sección de agradecimiento a padres */}
          <section className="py-12 px-8 text-center">
            <Heart size={18} className="mx-auto mb-4 text-[#A8E1B5]" />
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#6BA37A] mb-6 font-bold">Con el amor de mis padres</p>
            <div className="space-y-2">
              <p className="text-xl font-serif">Elías Pastor Paz Suárez</p>
              <p className="text-xl font-serif">Ruth Victoria Zárate Landa</p>
            </div>
          </section>

          {/* Contador regresivo */}
          <section className="py-16 px-8 text-center bg-white/30 border-y border-[#A8E1B5]/10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#6BA37A] mb-6">Falta muy poco para el gran día</p>
            <div className="flex justify-between max-w-[280px] mx-auto gap-4">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-serif mb-1">{countdown.days < 10 ? `0${countdown.days}` : countdown.days}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#6BA37A] font-bold">Días</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-serif mb-1">{countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#6BA37A] font-bold">Horas</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-serif mb-1">{countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#6BA37A] font-bold">Min</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-serif mb-1">{countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#6BA37A] font-bold">Seg</span>
              </div>
            </div>
          </section>

          {/* Fecha y calendario */}
          <section className="py-20 px-8 text-center">
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar size={18} className="text-[#6BA37A]" />
                <span className="font-serif text-xl">Sábado 24 de Mayo, 2026</span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock size={18} className="text-[#6BA37A]" />
                <span className="font-serif text-xl">5:00 PM</span>
              </div>
            </div>
            
            {/* Calendario */}
            <div className="bg-white/80 backdrop-blur p-6 rounded-3xl border border-[#A8E1B5]/30 max-w-[280px] mx-auto">
              <p className="text-[10px] uppercase tracking-widest text-[#6BA37A] mb-4 font-bold">Mayo 2026</p>
              <div className="grid grid-cols-7 gap-y-2 text-[9px] font-medium text-stone-400">
                <span>D</span><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span>
                {Array(startDayPadding).fill(null).map((_, i) => <span key={i}></span>)}
                {days.map(day => (
                  <span key={day} className={`h-7 w-7 flex items-center justify-center mx-auto rounded-full text-xs transition-all ${
                    day === 24 
                      ? 'bg-[#A8E1B5] text-white font-bold shadow-md scale-110 ring-2 ring-[#6BA37A]/30' 
                      : 'text-[#2D3A32]'
                  }`}>
                    {day}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-[#A8E1B5]/20">
                <p className="text-[9px] text-[#6BA37A] font-semibold">🎉 Día especial marcado 🎉</p>
              </div>
            </div>
          </section>

          {/* Ubicación */}
          <section className="px-8 py-12">
            <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-lg border border-[#A8E1B5]/20 text-center">
              <MapPin size={24} className="mx-auto text-[#6BA37A] mb-6" />
              <h3 className="font-serif text-2xl mb-4 italic">Recepción</h3>
              <p className="text-[10px] font-bold text-[#6BA37A] tracking-widest mb-2 uppercase">Asociación Santa Rosa</p>
              <p className="text-xs text-stone-500 mb-8 font-light">Jr. Las Hortensias 123, Urb. San Ignacio</p>
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

          {/* WhatsApp */}
          <section className="px-8 py-20 text-center">
            <div className="bg-[#A8E1B5] text-white p-12 rounded-[3.5rem] shadow-xl">
               <MessageCircle size={28} className="mx-auto mb-6" />
               <h3 className="font-serif text-3xl mb-4 italic">Asistencia</h3>
               <p className="text-[8px] uppercase tracking-widest mb-10 font-bold opacity-90">Confirmar antes del 10 de Mayo</p>
               <a 
                 href={whatsappLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block w-full py-4 bg-white text-[#6BA37A] rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-[#F0F4F1]"
               >
                 Confirmar asistencia por WhatsApp
               </a>
               <p className="text-[8px] mt-4 opacity-70">✨ Enviarás mensaje al +51 934 119 126 ✨</p>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-8 py-24 text-center">
            <h3 className="font-serif text-3xl mb-12 italic">Recuerdos</h3>
            <div className="relative mx-auto max-w-[280px]">
              <div className="absolute inset-0 border border-[#A8E1B5]/40 rounded-[2.5rem] rotate-2"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[3/4]">
                <img src="abichita.jpeg" alt="Abigail recuerdo" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="mt-24">
              <div className="w-12 h-px bg-[#A8E1B5] mx-auto mb-6"></div>
              <p className="font-serif text-4xl text-[#A8E1B5] italic">Abigail</p>
            </div>
          </footer>
        </div>

        {/* Audio - Asegurar que el src es correcto */}
        <audio ref={audioRef} src="music.mpeg" loop preload="auto" />
      </div>

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